import SocialIcons from './SocialIcons'
export default function Footer(){
  return (
    <footer className="mt-12 border-t border-white/6 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300">© {new Date().getFullYear()} Ahammad Sabik — All rights reserved.</div>
        <SocialIcons />
      </div>
    </footer>
  )
}