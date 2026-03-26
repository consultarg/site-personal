export function Footer() {
  return (
    <footer className="py-8 border-t border-border/40 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-medium text-foreground">
          © {new Date().getFullYear()} Graviens Jorgh. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://t.me/fatheyr" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank">
            Telegram
          </a>
          <a href="https://instagram.com/taecyeonokay" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
