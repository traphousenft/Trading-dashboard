window.onload = function() {
    // NQ Chart with session authentication
    new TradingView.widget({
        width: '100%',
        height: '100%',
        symbol: 'CME_MINI:NQ1!',
        interval: '15',
        timezone: 'America/New_York',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: 'f1f3f6',
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: false,
        container_id: 'nq',
        // Session-based auth - uses your browser login
        save_image: false,
        studies_access: {
            type: 'black',
            tools: [{ name: 'Volume' }]
        }
    });
    
    new TradingView.widget({
        width: '100%',
        height: '100%',
        symbol: 'CME_MINI:ES1!',
        interval: '15',
        timezone: 'America/New_York',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: 'f1f3f6',
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: false,
        container_id: 'es',
        save_image: false,
        studies_access: {
            type: 'black',
            tools: [{ name: 'Volume' }]
        }
    });
};
