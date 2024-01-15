import { FormEvent, useState } from "react";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" autoComplete="name" required />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" id="email" name="email" autoComplete="email" required />
      </label>
      <label htmlFor="message">
        Message
        <textarea id="message" name="message" autoComplete="off" required />
      </label>
      <button>Send</button>
      {responseMessage && <p>{responseMessage}</p>}

      <div className="text-2xl font-semibold pb-5">留言板</div>
      <div className="mb-4 flex flex-col lg:flex-row justify-between">
        <input
          className="text-gl h-16 rounded-2xl p-8 lg:w-1/2 lg:mr-3 w-full mt-3 lg:mt-0 border-[1px] border-[#666]"
          type="text"
          placeholder="称呼"
          maxLength="10"
        />
        <input
          className="text-gl h-16 rounded-2xl p-8 lg:w-1/2 lg:ml-3 w-full mt-3 lg:mt-0 border-[1px] border-[#666]"
          type="text"
          placeholder="联系电话"
          maxLength="20"
        />
      </div>
      <div>
        <textarea
          className="w-full text-gl rounded-2xl p-5 align-middle"
          name=""
          id=""
          cols="30"
          rows="15"
          maxlength="300"
          placeholder="留言后将于48小时内与您取得联系，感谢您的关注。"
        ></textarea>
      </div>
      <div className="mt-8 J_Submit">
        <button
          type="submit"
          className="text-info text-xl px-8 leading-13 inline-block rounded-xl bg-primary"
          value="提交"
        />
      </div>
    </form>
  );
}