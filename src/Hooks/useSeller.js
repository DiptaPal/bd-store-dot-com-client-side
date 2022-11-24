import { useEffect, useState } from 'react';

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setSetterLoading] = useState(true);
    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data?.isSeller)
                setSetterLoading(false)
            })
        }
    }, [email])
      return [isSeller, isSellerLoading]  
};

export default useSeller;