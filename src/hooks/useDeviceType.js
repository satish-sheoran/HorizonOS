import { useEffect, useState } from "react"

// This FN returns True/False based on IF device Width is less than 768px and we return like this : {IsMobile} becuase later if we want to add More things like isTablet , isDesktop etc. so it became easy to do
export const useDeviceType = () => {
    const [IsMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);

        return window.removeEventListener('resize', handleResize);
    }, [])
    return IsMobile;
}