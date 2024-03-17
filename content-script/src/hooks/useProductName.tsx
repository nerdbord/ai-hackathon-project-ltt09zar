import { useEffect, useState } from "react"

export const useProductName = () => {
    const [productName, setProductName] = useState<string>("");

    useEffect(() => {
        const handlePageChange = () => {
            const titleElement = document.querySelector('[data-pl="product-title"]') as HTMLElement;

            if(titleElement){
                setProductName(titleElement.innerText);
            };
        };

        handlePageChange();
        document.addEventListener("DOMContentLoaded", handlePageChange);
        window.addEventListener("hashchange", handlePageChange);

        return () => {
            document.removeEventListener("DOMContentLoaded", handlePageChange);
            window.removeEventListener("hashchange", handlePageChange);
            
        }
    }, []);
    
    return { productName };
}