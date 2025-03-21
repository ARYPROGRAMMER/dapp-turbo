import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/changelog">Changelog</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
