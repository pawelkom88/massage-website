export default function Success() {
  return (
    <section className="flex-center flex-col mt-8 my-24 py-12 max-readable">
      <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
        <path
          fill="currentColor"
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
      </svg>
      <div className="text-center">
        <h1 className="text-heading my-12 text-center">Message sent!</h1>
        <p className="text-lg my-2">Thank you for your message</p>
        <p> I&apos;ll get back to you as soon as we can !</p>
        <p> Have a great day! </p>
      </div>
    </section>
  );
}
