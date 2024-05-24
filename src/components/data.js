const data = [
    {
        code: 'AUD',
        country: 'Australian Dollar',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/au.svg',
    },
    {
        code: 'BGN',
        country: 'Bulgarian Lev',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/bg.svg',
    },
    {
        code: 'BRL',
        country: 'Brazilian Real',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/br.svg',
    },
    {
        code: 'CAD',
        country: 'Canadian Dollar',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/ca.svg',
    },
    {
        code: 'CHF',
        country: 'Swiss Franc',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/ch.svg',
    },
    {
        code: 'CNY',
        country: 'Chinese Yuan Renminbi',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/cn.svg',
    },
    {
        code: 'CZK',
        country: 'Czech Koruna',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/cz.svg',
    },
    {
        code: 'DKK ',
        country: 'Danish Krone',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/dk.svg',
    },
    {
        code: 'EUR',
        country: 'Euro',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/eu.svg',
    },
    {
        code: 'GBP',
        country: 'Great British Pound',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/gb.svg',
    },
    {
        code: 'HKD',
        country: 'Hong Kong Dollar',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/hk.svg',
    },
    {
        code: 'HRK',
        country: 'Croatian Kuna',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/hr.svg',
    },
    {
        code: 'HUF',
        country: 'Hungarian Forint',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/hu.svg',
    },
    {
        code: 'IDR',
        country: 'Indonesian Rupiah',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/id.svg',
    },
    {
        code: 'ILS',
        country: 'Israeli New Shekel',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/il.svg',
    },
    {
        code: 'INR',
        country: 'Indian Rupee',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/in.svg',
    },
    {
        code: 'ISK',
        country: 'Iceland Krona',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/is.svg',
    },
    {
        code: 'JPY',
        country: 'Japanese Yen',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/jp.svg',
    },
    {
        code: 'KRW',
        country: 'Korean Won',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/kr.svg',
    },
    {
        code: 'MXN',
        country: 'Mexican Peso',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/mx.svg',
    },
    {
        code: 'MYR',
        country: 'Malaysian Ringgit',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/my.svg',
    },
    {
        code: 'NOK',
        country: 'Norwegian Kroner',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/no.svg',
    },
    {
        code: 'NZD',
        country: 'New Zealand Dollar',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/nz.svg',
    },
    {
        code: 'PHP',
        country: 'Philippine Peso',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/ph.svg',
    },
    {
        code: 'PLN',
        country: 'Polish Zloty',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/pl.svg',
    },
    {
        code: 'RON',
        country: 'Romanian New Leu',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/ro.svg',
    },
    {
        code: 'RUB',
        country: 'Russian Rouble',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/ru.svg',
    },
    {
        code: 'SEK',
        country: 'Swedish Krona',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/se.svg',
    },
    {
        code: 'SGD',
        country: 'Singapore Dollar',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/sg.svg',
    },
    {
        code: 'THB',
        country: 'Thai Baht',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/th.svg',
    },
    {
        code: 'TRY',
        country: 'Turkish Lira',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/tr.svg',
    },
    {
        code: 'USD',
        country: 'US Dollar',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/us.svg',
    },
    {
        code: 'ZAR',
        country: 'South African Rand',
        flag: 'https://raw.githubusercontent.com/lipis/flag-icons/0019e711236a6ac5108e400f3e3c954e3fb4c076/flags/4x3/za.svg',
    },
]

export default data