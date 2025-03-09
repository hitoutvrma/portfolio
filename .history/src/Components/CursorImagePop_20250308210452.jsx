import { useState, useEffect } from "react";

const CursorImagePop = () => {
    const images = ["/1.jpg", "/r.jpg", "/3.jpg", "/4.jpg", "/5.jpg","/6.jpg"]; // Image list
    const [imageIndex, setImageIndex] = useState(0);
    const [positions, setPositions] = useState([]);
    const minDistance = 120; // Minimum distance to trigger next image

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (positions.length > 0) {
                const lastPos = positions[positions.length - 1];
                const distance = Math.sqrt((e.clientX - lastPos.x) ** 2 + (e.clientY - lastPos.y) ** 2);
                if (distance < minDistance) return;
            }

            const newImage = {
                id: Date.now(),
                src: images[imageIndex],
                x: e.clientX,
                y: e.clientY
            };

            setPositions((prev) => [...prev, newImage]);

            setImageIndex((prev) => (prev + 1) % images.length);

            setTimeout(() => {
                setPositions((prev) => prev.filter((img) => img.id !== newImage.id));
            }, 3000); // Remove after 10 sec
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [imageIndex, positions]);

    return (
        <div className="relative flex justify-center items-center" style={{ height: "100vh", overflow: "hidden" }}>
            <h1 className="absolute z-20 bg-amber-300 text-4xl">as;dfasjdkfl;</h1>
            {positions.map((img) => (
                <img
                    key={img.id}
                    src={img.src}
                    alt=""
                    className="pop-image"
                    style={{
                        position: "absolute",
                        width: "260px",
                        height: "auto",
                        pointerEvents: "none",
                        transform: "translate(-50%, -50%)",
                        left: img.x,
                        top: img.y,
                        opacity: 1,
                        transition: "opacity 4s ease-out"
                    }}
                />
            ))}
        </div>
    );
};

export default CursorImagePop;
