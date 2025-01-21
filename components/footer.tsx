export default function Footer() {
  return (
    <footer className="w-full backdrop-blur-md bg-black/30 py-6">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ankita Malik. All rights reserved.</p>
      </div>
    </footer>
  )
}

