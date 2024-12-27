import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useThemeContext } from '../../themeContext';

interface HeaderProps {
	title: string
}

const Header = (props: HeaderProps) => {
	const { title } = props;
	const { darkMode, toggleTheme } = useThemeContext();

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" aria-label='header title' component="div" sx={{ flexGrow: 1 }}>
					{title}
				</Typography>
				<IconButton aria-label="toggle between dark and light mode" onClick={() => toggleTheme()}>
					{darkMode ? <LightMode /> : <DarkMode />}
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Header;