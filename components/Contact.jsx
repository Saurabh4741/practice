import React, { useEffect, useState } from 'react';

const Contact = ({ formConfig }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
    if (!hCaptcha) {
      setResult("Please fill out captcha field");
      return;
    }
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Use the access key provided in formConfig
    formData.append("access_key", formConfig.accessKey);

    const res = await fetch(formConfig.submitURL, {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  function CaptchaLoader() {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');
    if (captchadiv.length) {
      captchadiv.forEach(function (item) {
        const sitekey = item.dataset.sitekey || formConfig.captchaSiteKey;

        let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.src = scriptSrc;
        document.body.appendChild(script);
      });
    }
  }

  useEffect(() => {
    CaptchaLoader();
  }, []);

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
      <h4 className="text-center mb-2 text-lg font-Ovo">{formConfig.title}</h4>
      <h2 className="text-center text-5xl font-Ovo">{formConfig.subtitle}</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">{formConfig.description}</p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <input type="hidden" name="subject" value={formConfig.subject} />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          {formConfig.fields.map((field, index) => (
            <input
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
              required={field.required}
              name={field.name}
            />
          ))}
        </div>
        <textarea rows="6" placeholder="Enter your message" className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90" required name="message"></textarea>
        <div className="h-captcha mb-6 max-w-full" data-captcha="true" data-sitekey={formConfig.captchaSiteKey}></div>
        <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover">
          {formConfig.buttonText}
          <img src={formConfig.buttonIcon} alt="Submit Icon" className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
