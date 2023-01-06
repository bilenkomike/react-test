import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { DetailsInterface } from "../../types/Details.types";
import { Button } from "@mui/material";

const DetailsPage = () => {
  const [country, setCountry] = useState<DetailsInterface | null>(null);
  const { country: countryq } = useParams();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/name/${countryq}`)
      .then((response) => {
        setCountry(response.data[0]);
      });
  }, [countryq]);

  return (
    country && (
      <article>
        <Container>
          <img src={country.flag} alt="" />
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {country.name}
          </Typography>
          {/* <Typography align="center"> */}
          <ul style={{ textAlign: "center" }}>
            <li>
              Native Name: <strong>{country.nativeName}</strong>;
            </li>
            <li>
              Alternative Spellings:{" "}
              <strong>
                <ul>
                  {country.altSpellings.map((alt) => (
                    <li key={alt}>{alt}</li>
                  ))}
                </ul>
              </strong>
            </li>

            <li>
              Capital: <strong>{country.capital}</strong>;
            </li>
            <li>
              SubRegion: <strong>{country.subregion}</strong>;
            </li>
            <li>
              Region: <strong>{country.region}</strong>;
            </li>
            <li>
              Borders:
              <strong>
                <ul>
                  {country.borders.map((border) => (
                    <li key={border}>{border}</li>
                  ))}
                </ul>
              </strong>
            </li>
            <li>
              Country Latitude: <strong>{country.latlng[0]}</strong>;
            </li>
            <li>
              Country Longitude: <strong>{country.latlng[1]}</strong>;
            </li>
            <li>
              Independence:{" "}
              <strong>
                {country.independent ? "Independent" : "Not Independent"}
              </strong>
              ;
            </li>
            <li>
              Alpha 2 code: <strong>{country.alpha2Code}</strong>;
            </li>
            <li>
              Alpha 3 code: <strong>{country.alpha3Code}</strong>;
            </li>
            <li>
              Numric code: <strong>{country.numericCode}</strong>;
            </li>

            <li>
              Area:{" "}
              <strong>
                {country.area}km<sup>2</sup>
              </strong>
              ;
            </li>
            <li>
              Population: <strong>{country.population}</strong>;
            </li>
            <li>
              Gini index: <strong>{country.gini}</strong>;
            </li>
            <li>
              Demonym: <strong>{country.demonym}</strong>;
            </li>

            <li>
              Timezones:{" "}
              <strong>
                <ul>
                  {country.timezones.map((time) => (
                    <li key={time}>{time} </li>
                  ))}
                </ul>
              </strong>
            </li>
            <li>
              Top Level Domains:
              <strong>
                <ul>
                  {country.topLevelDomain.map((dom) => (
                    <li key={dom}>{dom} </li>
                  ))}
                </ul>
              </strong>
            </li>
            <li>
              Calling Codes:
              <strong>
                <ul>
                  {country.callingCodes.map((callingCode) => (
                    <li key={callingCode}>{callingCode} </li>
                  ))}
                </ul>
              </strong>
            </li>
            <li>
              CIOC: <strong>{country.cioc}</strong>;
            </li>
            <li>
              Currencies:
              <strong>
                <ul>
                  {country.currencies.map((currency) => (
                    <li key={currency.code}>
                      {currency.name} - {currency.symbol}
                    </li>
                  ))}
                </ul>
              </strong>
            </li>
            <li>
              Lanuages:
              <strong>
                <ul>
                  {country.languages.map((language) => (
                    <li key={language.name}>
                      {language.name} - {language.nativeName}(
                      {language.iso639_1}, {language.iso639_2})
                    </li>
                  ))}
                </ul>
              </strong>
            </li>
          </ul>
          <Button style={{ margin: "auto" }} variant="contained">
            Add country to WishToVisitList
          </Button>
        </Container>
      </article>
    )
  );
};

export default DetailsPage;
