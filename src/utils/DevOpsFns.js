import { useEffect, useRef, useState } from "react"

export const UseFPSCount = () => {

    const [stats, setStats] = useState({
        fps: 0,
        frameTime: 0
    });

    const frames = useRef(0)
    const lastUpdate = useRef(performance.now())
    const raf = useRef(null)


    useEffect(() => {
        const loop = (now) => {
            frames.current++;
            const elapsed = now - lastUpdate.current

            if (elapsed >= 1000) {
                const fps = (frames.current * 1000) / elapsed;

                const frameTime = 1000 / fps;

                setStats({
                    fps: Math.round(fps),
                    frameTime: Number(frameTime.toFixed(2))
                })

                frames.current = 0;
                lastUpdate.current = now;
            }

            raf.current = requestAnimationFrame(loop)
        }

        raf.current = requestAnimationFrame(loop)

        return () => {
            cancelAnimationFrame(raf.current)
        }
    }, [])

    return stats
}