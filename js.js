const getCurrency = () => {
    let link = 'https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc'

    const settings = {
        async: true,
        crossDomain: true,
        url: link,
        method: "GET",
        headers: {
            'X-RapidAPI-Key': 'fb29f3df22msha1ab5e2e66a9c3bp1006d1jsn877efe47a0a0',
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
    };
    $.ajax(settings).done(function (response) {
        $(".results-tbody").empty();
        for (let i = 0; i < response.length; i++) {
          let tokenLink = 'https://www.coingecko.com/en/coins/' + response[i].id            
          let tokenImage = response[i].image;
          let tokenName = response[i].name;
          let tokenSymbol = response[i].symbol;
          let tokenPrice = response[i].current_price;
          
          let html = `
          <tr>
              <td>${i}</td>
              <td>
                  <img src="${tokenImage}" alt="${tokenName}" width="20" height="20">
                  <span><b><a href="${tokenLink}" target="_blank">${tokenName}</a></b></span>
                  <span><small>${tokenSymbol}</small></span>
              </td>
              <td>${tokenSymbol}</td>
              <td>${tokenPrice}$</td>
          </tr>
        `;
        $(".results-tbody").append(html);
        }
    });
};
