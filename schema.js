// Create the JSON-LD schema markup
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pearl Tech Solutions",  // No change needed here
    "url": "https://www.pearltechsolutions.in",  // Change to your actual website URL
    "logo": "https://pearltechsolutions.in/Assets/Logo.png",  // Change to your actual logo URL
    "sameAs": [
      "https://www.facebook.com/yourpage",  // Change to your actual Facebook page URL
      "https://twitter.com/yourprofile",    // Optionally add or update other social profiles
      "https://www.linkedin.com/company/yourcompany"  // Optionally add or update other social profiles
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-8901",  // Change to your actual contact number
      "contactType": "Customer Service",
      "email": "info@pearltechsolutions.com"  // Change to your actual email address
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",  // Change to your actual street address
      "addressLocality": "Tech City",
      "addressRegion": "Tech State",
      "postalCode": "12345",
      "addressCountry": "US"  // Change to your actual country
    }
  };
  
  // Create a new script element
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  
  // Append the script element to the head of the document
  document.head.appendChild(script);
  