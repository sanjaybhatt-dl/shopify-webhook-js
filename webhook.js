document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ ScriptTag loaded");

  if (window.location.pathname.includes("/thank-you")) {
    console.log("🎯 On Thank You page");

    if (typeof Shopify !== "undefined" && Shopify.checkout) {
      const payload = {
        order_id: Shopify.checkout.order_id,
        email: Shopify.checkout.email,
        total_price: Shopify.checkout.total_price
      };

      console.log("📦 Sending payload:", payload);

      fetch("https://your-webhook-endpoint.com/hook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(res => res.text())
        .then(data => console.log("✅ Webhook response:", data))
        .catch(err => console.error("❌ Webhook error:", err));
    }
  }
});
