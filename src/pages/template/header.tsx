import { AppBar, Toolbar, Typography } from '@mui/material';

interface iHeaderProps {
	title: string
}

const Header = (props: iHeaderProps) => {
	const { title } = props;

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" aria-label='header title' component="div" sx={{ flexGrow: 1 }}>
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header;