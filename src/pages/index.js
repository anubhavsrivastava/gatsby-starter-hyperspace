import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import pic1 from '../images/pic01.jpg';
import pic2 from '../images/pic02.jpg';
import pic3 from '../images/pic03.jpg';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';
import Logo from '../images/DINERO Logo_White on violet2.png';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <a href="/#" className="image">
            <img src={Logo} alt="" data-position="25% 25%" />
          </a>
          <p>
            Dependable Decentralized Global Transactions
          <br />
          </p>
          <ul className="actions">
            <li>
              <a href="https://github.com/dinerocoin/dinero/releases" class="button icon fa-download">
                Desktop Wallets (v1.0.1.1)
              </a>
            </li>
            <li>
              <a href="http://explorer.dinerocoin.org/" class="button icon fa-external-link">
                Dinero Blockchain Explorer
              </a>
            </li>
            <li>
              <a href="https://discordapp.com/invite/EJkEC9g" class="button icon fa-users">
                Dinero Discord
              </a>
            </li>
            <li>
              <a href="https://github.com/dinerocoin/Mining-Pools" class="button icon fa-microchip">
                Mining Pools
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" className="wrapper style2 spotlights">
        <section>
          <div className="content">
            <div className="inner">
              <h2>About DINERO</h2>
              <p>
                Dinero is an open source cryptocurrency based on Bitcoin and Dash which provides fast private transactions along with a low to no transaction fees. Dinero incorporates many of the improvements which Dash has made on top of Bitcoin as well as the addition of an ASIC resistant hashing algorithm called NeoScrypt to avoid any undue centralisation of mining resources. 
              </p>
              <ul className="actions">
              <li>
                <a href="https://github.com/dinerocoin/Dinero-Whitepaper/raw/master/Dinero-WhitePaper-v3.pdf" class="button icon fa-download">
                  Dinero Whitepaper v3
                </a>
              </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic2} alt="" data-position="top center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>DINERO’s VISION</h2>
              <p>
                “We want to enable everybody to easily conduct financial transactions with anybody they choose with ease, privacy and dignity without the need to involve or seek permission from third parties”
              </p>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic3} alt="" data-position="25% 25%" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>DINERO’s MISSION</h2>
              <p>
                “To enable Dinero users to prosper financially by providing a reliable decentralized financial services solution that is easy to use.”.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>What we do</h2>
          <p>
            Dinero is a cryptocurrency which enables anonymous instant payments to anyone, anywhere in the world. Dinero uses peer-to-peer technology to operate with no central authority: managing transactions and issuing money are carried out collectively by the network. What is Dinero’s advantage over other cryptocurrencies? Truly DECENTRALIZED Platform.
          </p>
          <div className="features">
            <section>
              <span className="icon major fa-github" />
              <h3>OPEN SOURCE</h3>
              <p>
                DINERO is OPEN-SOURCE that runs on non-proprietary servers, so there’s no need to rely on any company for continuous support. Anyone can review or contribute to DINERO’s source code on{' '}
            <a href="https://github.com/dinerocoin/dinero/releases">Github</a>.
              </p>
            </section>
            <section>
              <span className="icon major fa-lock" />
              <h3>SECURE</h3>
              <p>
                Transactions are validated and secured by DINERO Miners and Dinero Masternodes Holders globally.
              </p>
            </section>
            <section>
              <span className="icon major fa-cog" />
              <h3>DECENTRALIZED</h3>
              <p>
                Unlike banks, corporations or government controlled institutions, DINERO is DECENTRALIZED. It is run by anyone who uses a DINERO Wallet, DINERO Miners and DINERO Masternode Holders.
              </p>
            </section>
            <section>
              <span className="icon major fa-expand" />
              <h3>SCALABLE</h3>
              <p>
                DINERO is a SCALABLE cryptocurrency platform suitable for mass adoption.
              </p>
            </section>
            <section>
              <span className="icon major fa-user-secret" />
              <h3>PRIVATE</h3>
              <p>
                Your finances are your own business, DINERO ensures your transaction history and balances are private and secure.
              </p>
            </section>
            <section>
              <span className="icon major fa-line-chart" />
              <h3>DINERO EXCHANGE Listings</h3>
              <p>
                {' '}
                <a href="https://wallet.crypto-bridge.org/market/BRIDGE.DIN_BRIDGE.BTC">CryptoBridge</a>
                <br />
                {' '}
                <a href="https://www.southxchange.com/Market/Book/DIN/BTC">SouthXchange</a>
                <br />
                {' '}
                <a href="https://graviex.net/markets/dinbtc">Graviex</a>
                <br />
                {' '}
                <a href="https://tradesatoshi.com/Exchange?market=DIN_BTC">TradeSatoshi</a>
              </p>
            </section>
          </div>
          <ul className="actions">
            <li>
              <a href="https://github.com/dinerocoin/dinero/releases" class="button icon fa-download">
                Download Dinero Wallets
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Contact Us</h2>
          <p>
          NOTE: DINERO CANNOT help with any type of passphrase problems. If you lose your passphrase your DIN is gone forever! Feel free to contact us with any other questions or join Discord for live support from our community.
          </p>
          <div className="split style1">
            <section>
              <ul className="contact">
                <li>
                  <h3>Chat</h3>
                    <li>
                      <a href="https://discordapp.com/invite/EJkEC9g" class="button icon fa-discord">
                        Discord
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/joinchat/IKqX_wsLjpx7g6o5beM30Q" class="button icon fa-telegram">
                        TeleGram
                      </a>
                    </li>
                </li>
                <li>
                  <h3>Email</h3>
                  <a href="mailto:support@dinerocoin.org">support@dinerocoin.org</a>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a href="https://twitter.com/DineroCrypto" className="fa-twitter">
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/DineroCrypto-225049868053385/" className="fa-facebook">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/dinerocoin" className="fa-github">
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/joinchat/IKqX_wsLjpx7g6o5beM30Q" className="fa-telegram">
                        <span className="label">Telegram</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.reddit.com/r/Dinerocoin/" className="fa-reddit">
                        <span className="label">Reddit</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCoj95EkI69ojMjXZqy95BWA" className="fa-youtube">
                        <span className="label">YouTube</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://discordapp.com/invite/EJkEC9g" className="fa-users">
                        <span className="label">Discord</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
