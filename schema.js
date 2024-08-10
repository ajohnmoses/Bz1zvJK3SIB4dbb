// Create the JSON-LD schema markup
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pearl Tech Solutions",  // No change needed here
    "url": "https://www.pearltechsolutions.in",  // Change to your actual website URL
    "logo": "https://pearltechsolutions.in/Assets/Logo.png",  // Change to your actual logo URL
    
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 63793 85125",  // Change to your actual contact number
      "contactType": "Customer Service",
      "email": "thepearl.global@gmail.com"  // Change to your actual email address
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kolathur",  // Change to your actual street address
      "addressLocality": "Chennai",
      "addressRegion": "Tamilnadu",
      "postalCode": "600082",
      "addressCountry": "India"  // Change to your actual country
    }
  };
  
  // Create a new script element
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  
  // Append the script element to the head of the document
  document.head.appendChild(script);
  