import { useEffect, useState } from 'react';

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setBuyerLoading] = useState(true);
    useEffect(() => {
        if(email){
            fetch(`https://bd-store-dot-com-server-side.vercel.app/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsBuyer(data?.isBuyer)
                setBuyerLoading(false)
            })
        }
    }, [email])
      return [isBuyer, isBuyerLoading]  
};

export default useBuyer;