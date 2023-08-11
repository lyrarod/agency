"use client";

export function Hero() {
  return (
    <div className="relative pt-[150px] pb-[110px] lg:pt-[170px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 lg:mb-0">
              <h2 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-[40px] sm:leading-tight md:text-[45px] md:leading-tight lg:text-[38px] lg:leading-tight xl:text-[45px] xl:leading-tight">
                Build beautiful website with WindGrids blocks.
              </h2>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color md:text-lg md:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at egestas tortor. Morbi sed odio id purus pellentesque iaculis.
                Nulla facilisi.
              </p>

              <p className="mb-5 text-lg font-semibold text-body-color">
                Subscribe to get notified when we launch 🎉
              </p>

              <form className="mb-7 flex max-w-[445px] flex-wrap">
                <input
                  type="email"
                  className="mr-3 mb-3 h-[50px] w-full rounded border border-form-stroke bg-white px-5 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none sm:max-w-[220px] md:max-w-[315px] lg:max-w-[250px] xl:max-w-[315px]"
                  placeholder="Your work mail"
                />
                <button
                  onClick={(e) => e.preventDefault()}
                  className="mb-3 h-[50px] rounded bg-primary px-6 text-sm text-white transition hover:bg-opacity-90"
                >
                  Notify Me!
                </button>
              </form>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="-mx-2 flex flex-wrap sm:-mx-4">
              <div className="w-1/2 px-2 sm:px-4">
                <div className="mb-4 h-[256px] sm:mb-8 sm:h-[442px] lg:h-[332px] xl:h-[442px]">
                  <img
                    src="/assets/hero/image-1.jpg"
                    alt="hero image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="w-1/2 px-2 sm:px-4">
                <div className="mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]">
                  <img
                    src="/assets/hero/image-2.jpg"
                    alt="hero image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]">
                  <img
                    src="/assets/hero/image-3.jpg"
                    alt="hero image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
