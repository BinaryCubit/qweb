"use client";

import { useState, useCallback } from "react";


interface PayButtonProps {
  programId: string;
  programName: string;
  amount: number;           // in INR (e.g. 35000)
  originalAmount?: number;  // for showing strikethrough price
  currency?: string;
}

type PaymentState = "idle" | "loading" | "success" | "error";

// Dynamically load Razorpay checkout.js only when needed
function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function PayButton({
  programId,
  programName,
  amount,
  originalAmount,
  currency = "INR",
}: PayButtonProps) {
  const [state, setState] = useState<PaymentState>("idle");
  const [paymentId, setPaymentId] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handlePayment = useCallback(async () => {
    setState("loading");

    // 1. Load Razorpay SDK
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      setErrorMsg("Failed to load payment gateway. Please check your internet connection.");
      setState("error");
      return;
    }

    // 2. Create order on server
    let orderData: { orderId: string; amount: number; currency: string; keyId: string };
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency, programName, programId }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Order creation failed");
      }
      orderData = await res.json();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Could not initiate payment";
      setErrorMsg(message);
      setState("error");
      return;
    }

    // 3. Open Razorpay checkout modal
    const options = {
      key: orderData.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Qubinaire Services Pvt Ltd",
      description: `Enrollment: ${programName}`,
      order_id: orderData.orderId,
      handler: async (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) => {
        // 4. Verify payment on server
        try {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            setPaymentId(response.razorpay_payment_id);
            setState("success");
          } else {
            setErrorMsg("Payment verification failed. Please contact support.");
            setState("error");
          }
        } catch {
          setErrorMsg("Verification error. Please contact support with your payment ID: " + response.razorpay_payment_id);
          setState("error");
        }
      },
      prefill: { name: "", email: "", contact: "" },
      notes: { program: programName },
      theme: { color: "#3B7EBB" },
      modal: {
        ondismiss: () => {
          if (state === "loading") setState("idle");
        },
        confirm_close: true,
        animation: true,
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", (response: { error: { description: string } }) => {
      setErrorMsg(response.error?.description || "Payment failed. Please try again.");
      setState("error");
    });

    setState("idle"); // reset before opening modal
    rzp.open();
  }, [amount, currency, programName, programId, state]);

  const formatAmount = (amt: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amt);

  // ── Success Modal ──────────────────────────────────────────────────
  if (state === "success") {
    return (
      <div className="mt-6 bg-green-50 border border-green-200 rounded-[2rem] p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-black text-green-800 mb-2">Enrollment Confirmed!</h3>
        <p className="text-sm text-green-700 mb-4">
          You&apos;re enrolled in <strong>{programName}</strong>. Our team will reach out within 24 hours.
        </p>
        <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">
          Payment ID: {paymentId}
        </p>
        <a
          href="https://wa.me/918000886594"
          className="inline-block mt-6 bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all"
        >
          Chat with Us on WhatsApp
        </a>
      </div>
    );
  }

  // ── Error State ────────────────────────────────────────────────────
  if (state === "error") {
    return (
      <div className="mt-6 bg-red-50 border border-red-200 rounded-[2rem] p-6 text-center">
        <div className="text-4xl mb-3">⚠️</div>
        <p className="text-sm text-red-700 font-bold mb-4">{errorMsg}</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => setState("idle")}
            className="px-6 py-3 bg-[#3B7EBB] text-white font-bold rounded-xl text-sm hover:bg-[#1B3B5A] transition-all"
          >
            Try Again
          </button>
          <a
            href="https://wa.me/918000886594"
            className="px-6 py-3 bg-[#1B3B5A] text-white font-bold rounded-xl text-sm hover:bg-[#3B7EBB] transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    );
  }

  // ── Default CTA ────────────────────────────────────────────────────
  return (
    <div className="mt-6 space-y-4">
      {/* Pricing display */}
      <div className="flex items-center gap-4">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Program Fee</p>
          <div className="flex items-center gap-3">
            <p className="text-3xl font-black text-[#1B3B5A]">{formatAmount(amount)}</p>
            {originalAmount && (
              <p className="text-lg text-slate-400 line-through">{formatAmount(originalAmount)}</p>
            )}
          </div>
          {originalAmount && (
            <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mt-1">
              {Math.round(((originalAmount - amount) / originalAmount) * 100)}% OFF — Limited Time
            </p>
          )}
        </div>
        {originalAmount && (
          <div className="ml-auto bg-green-100 text-green-700 px-3 py-2 rounded-xl text-center">
            <p className="text-xs font-black">SAVE</p>
            <p className="text-sm font-black">{formatAmount(originalAmount - amount)}</p>
          </div>
        )}
      </div>

      {/* Pay Button */}
      <button
        onClick={handlePayment}
        disabled={state === "loading"}
        className="w-full py-5 rounded-2xl font-black text-sm tracking-widest shadow-xl transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 bg-[#3B7EBB] hover:bg-[#1B3B5A] text-white"
      >
        {state === "loading" ? (
          <>
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            PROCESSING...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="1" y="4" width="22" height="16" rx="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            PAY {formatAmount(amount)} — ENROLL NOW
          </>
        )}
      </button>

      {/* Trust badges */}
      <div className="flex items-center justify-center gap-6 pt-2">
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
          <span className="text-green-500">🔒</span> Secured by Razorpay
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
          <span>💳</span> UPI · Cards · Net Banking · EMI
        </div>
      </div>

      <p className="text-center text-[10px] text-slate-400 italic">
        EMI options available. Need help?{" "}
        <a href="https://wa.me/918000886594" className="text-[#3B7EBB] font-bold hover:underline">
          Chat on WhatsApp
        </a>
      </p>
    </div>
  );
}
