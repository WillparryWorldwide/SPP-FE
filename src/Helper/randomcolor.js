export const randomColor = () => {
	const colors = (e) => {
		switch (e.charAt(0).toLowerCase()) {
			case 'a':
				return '#BB86FC';
			case 'b':
				return '#43A7D3';
			case 'c':
				return '#73819E';
			case 'd':
				return '#03DAC5';
			case 'e':
				return '#60CC8A';
			case 'f':
				return '#036b64';
			case 'g':
				return '#505e2d';
			case 'h':
				return '#e30909';
			case 'i':
				return '#b05e0c';
			case 'j':
				return '#DB5B5B';
			case 'k':
				return '#ed5a12';
			case 'l':
				return '#900b37';
			case 'm':
				return '#ee8109';
			case 'n':
				return '#54f0b2';
			case 'o':
				return '#03298d';
			case 'p':
				return '#89de0a';
			case 'q':
				return '#033a01';
			case 'r':
				return '#9da6ac';
			case 's':
				return '#b39f08';
			case 't':
				return '#1b83ed';
			case 'u':
				return '#fbbabd';
			case 'v':
				return '#f666c7';
			case 'w':
				return '#aa8741';
			case 'x':
				return '#0eeec8';
			case 'y':
				return '#365cf7';
			case 'z':
				return '#7bf142';
			default:
				return '#03DAC5';
		}
	}
	const handleColor = (event) => {
		switch (event.toLowerCase()) {
			case "fully paid":
				return '#0BB14B'
			case "partially paid":
				return '#FF8900'
			case "overdue":
				return '#F80000'
			default:
				return '#7B7B7B'
		}
	}
	return { colors, handleColor };
}