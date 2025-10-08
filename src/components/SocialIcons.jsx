import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function SocialIcons() {
  const links = [
    { href: 'https://github.com/sabik-ahmd', label: 'GitHub', icon: FaGithub },
    { href: 'https://www.linkedin.com/in/ahammad-sabik', label: 'LinkedIn', icon: FaLinkedin },
    { href: 'https://x.com/sabik_ahmd?t=w0BjueZObz8400v-_we2xw&s=09', label: 'Twitter', icon: FaTwitter },
    { href: 'mailto:sabik.mh@gmail.com', label: 'Email', icon: FaEnvelope },
    { 
      href: 'https://wa.me/919686893983', // WhatsApp link with your number in international format
      label: 'WhatsApp', 
      icon: FaWhatsapp 
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {links.map(l => {
        const Icon = l.icon;
        return (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/4 hover:bg-white/8 transition"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
