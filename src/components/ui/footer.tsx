// components/Footer.tsx
export const Footer = () => {
    const currentYear = new Date().getFullYear()
    
    // Default values for environment variables
    const repoUrl = process.env.NEXT_PUBLIC_REPO_URL || '#'
    const appVersion = process.env.NEXT_PUBLIC_APP_VERSION || '0.0.0'
  
    return (
      <footer className="bg-indigo-600 dark:bg-gray-800 text-white py-8 px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} HiveSync. All rights reserved.
              
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <p className="text-sm">
              Made with ❤️ by <span className="mx-1"></span>
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-200 transition-colors"
              >
                Team HiveSync
              </a>
              <span className="mx-2">•</span>
              <span className="font-mono">
                v{appVersion}
              </span>
            </p>
          </div>
        </div>
      </footer>
    )
  }