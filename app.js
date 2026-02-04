window.onload = function() {
    new TradingView.widget({
        autosize: true,
        symbol: 'CME_MINI:NQ1!',
        interval: '15',
        timezone: 'America/New_York',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: 'f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        hide_side_toolbar: false,
        details: true,
        hotlist: true,
        calendar: false,
        studies: ['STD;Volume'],
        container_id: 'nq',
        // Add authentication
        customer: 'YOUR_TRADINGVIEW_USERNAME',
        // This will prompt for login
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650'
    });
    
    new TradingView.widget({
        autosize: true,
        symbol: 'CME_MINI:ES1!',
        interval: '15',
        timezone: 'America/New_York',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: 'f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        hide_side_toolbar: false,
        details: true,
        hotlist: true,
        calendar: false,
        studies: ['STD;Volume'],
        container_id: 'es',
        customer: 'YOUR_TRADINGVIEW_USERNAME',
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650'
    });
};
