document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.service-button');

    function getRandomColor() {
        const colors = ['#b8a69a', '#d2beb0', '#bb9684'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function setInitialColor(button) {
        button.style.backgroundColor = getRandomColor();
    }

    function setRandomColor(button) {
        const targetColor = getRandomColor();
        const currentColor = getComputedStyle(button).backgroundColor || getRandomColor();
        const steps = 30;
        const delay = getRandomInterval() / steps;

        function interpolateColor(start, end, step, steps) {
            const interpolate = (a, b) => a + (b - a) * step / steps;
            const r = interpolate(start[0], end[0], step, steps);
            const g = interpolate(start[1], end[1], step, steps);
            const b = interpolate(start[2], end[2], step, steps);
            return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
        }

        let step = 0;
        const interval = setInterval(function () {
            if (step <= steps) {
                const interpolatedColor = interpolateColor(
                    currentColor.match(/\d+/g).map(Number),
                    targetColor.match(/\d+/g).map(Number),
                    step,
                    steps
                );
                button.style.backgroundColor = interpolatedColor;
                step++;
            } else {
                clearInterval(interval);
                button.style.backgroundColor = targetColor;
            }
        }, delay);
    }

    function startColorChange() {
        buttons.forEach(button => {
            setInitialColor(button);
            setInterval(() => setRandomColor(button), getRandomInterval());
        });
    }

    function getRandomInterval() {
        return Math.floor(Math.random() * (14000 - 10000 + 1)) + 10000;
    }

    startColorChange();
});
