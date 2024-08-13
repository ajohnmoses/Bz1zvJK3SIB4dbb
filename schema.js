const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Pearl Tech Solutions | Home", 
    "url": "https://www.pearltechsolutions.in",  
    "logo": "https://pearltechsolutions.in/Assets/Logo.png", 
    
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 63793 85125", 
      "contactType": "Customer Service",
      "email": "thepearl.global@gmail.com" 
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kolathur", 
      "addressLocality": "Chennai",
      "addressRegion": "Tamilnadu",
      "postalCode": "600082",
      "addressCountry": "India"
    }
  };
  
  // Create a new script element
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  
  // Append the script element to the head of the document
  document.head.appendChild(script);
  