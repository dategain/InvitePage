import React, { useState, useEffect } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dategain.app";

const InviteLanding = () => {
  const [referralCode, setReferralCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Extract referral code from URL
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) {
      setReferralCode(ref);
      // Save to localStorage in case user opens the web app later
      localStorage.setItem("referralCode", ref);
    }
  }, []);

  const handleCopyCode = async () => {
    if (!referralCode) return;
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = referralCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    window.open(PLAY_STORE_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5C258D] via-[#3a1463] to-[#000000] flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/onboarding/dategain-logo.svg"
          alt="Dategain"
          className="w-24 h-24 mx-auto"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          You've been invited! 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Your friend wants you to join <strong>Dategain</strong> — level up
          your flirting & texting game!
        </p>

        {/* Reward Banner */}
        <div className="bg-gradient-to-r from-[#E646FF20] to-[#5050F820] rounded-2xl p-4 mb-6">
          <p className="text-sm text-gray-600 mb-1">Sign up and get</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-[#E646FF] to-[#5050F8] bg-clip-text text-transparent">
            200 FREE Credits
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Start practicing instantly!
          </p>
        </div>

        {/* Referral Code Display */}
        {referralCode && (
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">Your invite code:</p>
            <div className="flex items-center justify-center gap-2">
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl px-6 py-3">
                <span className="text-xl font-mono font-bold tracking-widest text-gray-800">
                  {referralCode}
                </span>
              </div>
              <button
                onClick={handleCopyCode}
                className="bg-gray-100 hover:bg-gray-200 rounded-xl p-3 transition-colors"
                title="Copy code"
              >
                {copied ? (
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {copied
                ? "Copied! ✓"
                : "Copy this code — you'll enter it when signing up"}
            </p>
          </div>
        )}

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-[#249A09] to-[#055807] text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 mb-4"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
          </svg>
          Download on Google Play
        </button>

        {/* Steps */}
        <div className="text-left mt-6 space-y-3">
          <p className="text-sm font-semibold text-gray-700 mb-2">
            How to claim your credits:
          </p>
          <div className="flex items-start gap-3">
            <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
              1
            </span>
            <p className="text-sm text-gray-600">
              Download Dategain from Play Store
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
              2
            </span>
            <p className="text-sm text-gray-600">Sign up for a new account</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
              3
            </span>
            <p className="text-sm text-gray-600">
              Enter invite code{" "}
              {referralCode && (
                <strong className="text-purple-700">{referralCode}</strong>
              )}{" "}
              during signup
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
              4
            </span>
            <p className="text-sm text-gray-600">
              Get 200 credits instantly! 🎉
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-gray-400 text-xs mt-8">
        © {new Date().getFullYear()} Dategain. All rights reserved.
      </p>
    </div>
  );
};

export default InviteLanding;
