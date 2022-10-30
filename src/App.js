import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";
import Pinball from "components/pinball";
import { _getSettings } from "store/selectors";

import { createCustomTheme } from "./theme";

const App = () => {
    const settings = _getSettings();

    const theme = createCustomTheme({
        direction: settings.direction,
        theme: settings.theme,
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ minHeight: "100vh" }}>
                <Pinball />
            </Box>
        </ThemeProvider>
    );
};

export default App;
