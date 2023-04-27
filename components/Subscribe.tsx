export default function Subscribe() {
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-rows-2 px-6 lg:gap-8 lg:px-8">
        <div className="mx-auto">
          <h2 className="inline text-3xl font-bold tracking-normal text-gray-900 sm:block sm:text-5xl lg:inline xl:block">
            Subscribe To Join the Community
          </h2>
          <p className="mt-8">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, Lorem Ipsum has been the
          </p>
        </div>
        <form className="mx-auto w-full max-w-lg lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
