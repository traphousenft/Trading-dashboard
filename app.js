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
        container_id: 'nq_chart'
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
        container_id: 'es_chart'
    });
};
