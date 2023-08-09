import React, { useState, useEffect } from 'react';
import PharmaciesList from './src/components/Pharmacies-List/PharmaciesList';
import LoadingScreen from './src/components/LoadingScreen'; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 2000); 

    // Clean up the effect
    return () => {};
  }, []);

  return loading ? <LoadingScreen /> : <PharmaciesList />;
};

export default App;
