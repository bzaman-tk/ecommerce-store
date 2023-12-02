'use client'

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
})

const Currency = ({ value }) => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])
    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
};

export default Currency;