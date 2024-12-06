export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
      <main className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 m-4 text-center">
        <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-8">
          Graduation Invitation
        </h1>
        
        <div className="mb-8 text-gray-700 dark:text-gray-300">
          <p className="text-lg mb-4">
            Welcome! Please enter your name to view my graduation invitation for you.
          </p>
        </div>

        <form 
          action="/invitation" 
          className="flex flex-col items-center gap-4"
        >
          <input 
            className="w-full max-w-md rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
          />
          <button
            className="mt-4 px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            type="submit"
          >
            View Invitation
          </button>
        </form>

        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>Enter your name to receive your personalized graduation invitation</p>
        </div>
      </main>
    </div>
  );
}
