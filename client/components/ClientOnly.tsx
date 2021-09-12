import {ReactNode, useEffect, useState} from "react";

export default function ClientOnly<T extends { children: ReactNode }>({ children, ...delegated }: T) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <div {...delegated}>{children}</div>;
}
