export function CallToAction() {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[110px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <h2 className="mb-6 text-3xl font-semibold leading-snug text-white md:text-[40px]">
                  What Are You Looking For?
                  <span className="font-light"> Get Started Now </span>
                </h2>
                <p className="mb-8 text-base leading-relaxed text-white md:pr-10">
                  There are many variations of passages of Lorem Ipsum but the
                  majority have suffered in some form.
                </p>
                <a
                  href="#"
                  className="inline-block rounded bg-[#13C296] py-3 px-7 text-base font-medium text-white transition hover:bg-opacity-90"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <svg
            width={495}
            height={470}
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={55}
              cy={442}
              r={138}
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth={50}
            />
            <circle
              cx={446}
              r={39}
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth={20}
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth={12}
            />
          </svg>
        </span>
        <span className="absolute right-0 bottom-0">
          <svg
            width={493}
            height={470}
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={462}
              cy={5}
              r={138}
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth={50}
            />
            <circle
              cx={49}
              cy={470}
              r={39}
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth={20}
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth={13}
            />
          </svg>
        </span>
      </div>
    </section>
  );
}
