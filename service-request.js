const serviceRequestForm = document.getElementById("service-request-form");
const requestStatus = document.getElementById("request-status");

serviceRequestForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = {
    customerName: serviceRequestForm.customerName.value,
    customerEmail: serviceRequestForm.customerEmail.value,
    service: serviceRequestForm.service.value,
    jobDescription: serviceRequestForm.jobDescription.value,
  };

  try {
    const response = await fetch("/api/service-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong.");
    }

    requestStatus.textContent =
      "Thank you! Your service request was received.";

    serviceRequestForm.reset();

  } catch (error) {
    console.error("Service request error:", error);

    requestStatus.textContent =
      "Sorry, we could not submit your request.";
  }
});