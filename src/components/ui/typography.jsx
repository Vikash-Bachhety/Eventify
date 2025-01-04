export function TypographyH1({ children, className = "" }) {
    return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
  }

  export function TypographyH2({ children, className = "" }) {
    return <h2 className={`text-2xl font-semibold ${className}`}>{children}</h2>;
  }

  export function TypographyH3({ children, className = "" }) {
    return <h3 className={`text-xl font-medium ${className}`}>{children}</h3>;
  }

  export function TypographyH4({ children, className = "" }) {
    return <h4 className={`text-lg font-medium ${className}`}>{children}</h4>;
  }

  export function TypographyParagraph({ children, className = "" }) {
    return <p className={`text-base ${className}`}>{children}</p>;
  }
