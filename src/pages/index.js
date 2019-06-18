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
              <Link className="button" to="/generic">
              Download Wallets
              </Link>
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
                Dinero is a cryptocurrency which enables anonymous instant payments to anyone, anywhere in the world. Dinero uses peer-to-peer technology to operate with no central authority: managing transactions and issuing money are carried out collectively by the network. What is Dinero’s advantage over other cryptocurrencies? Truely DECENTRALIZED Platform.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Learn more
                  </Link>
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
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Learn more
                  </Link>
                </li>
              </ul>
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
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>What we do</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
            lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
            imperdiet est velit quis lorem.
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
                Transactions are validated and secured by DINERO Miners and Dinero Masternodes Holders globally. To view current DINERO Blockchain Transactions, click{' '}
              <a href="http://explorer.dinerocoin.org/">here</a>.
              </p>
            </section>
            <section>
              <span className="icon major fa-cog" />
              <h3>DECENTRALIZED</h3>
              <p>
                Unlike banks, corporations or government controlled institutions, DINERO is DECENTRALIZED. It is ran by anyone who uses a DINERO Wallet, DINERO Miners and DINERO Masternode Holders.
              </p>
            </section>
            <section>
              <span className="icon major fa-desktop" />
              <h3>SCALABLE</h3>
              <p>
                DINERO is a SCALABLE cryptocurrency platform suitable for mass adoption.
              </p>
            </section>
            <section>
              <span className="icon major fa-chain" />
              <h3>PRIVATE</h3>
              <p>
                Your finances are your own business, DINERO ensures your transaction history and balances are private and secure.
              </p>
            </section>
            <section>
              <span className="icon major fa-exchange" />
              <h3>Exchanges</h3>
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
              <Link className="button" to="/generic">
              Download Wallets
              </Link>
             </li>
          </ul>
        </div>
      </section>

      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Contact Us</h2>
          <p>
          Please read the FAQ section before contacting us. DINERO CANNOT help with any type of passphrase problems. If you lose your passphrase your DIN is gone forever! Feel free to contact us with any other questions or join Discord for live support from our community.
          </p>
          <div className="split style1">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="5" />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <a href="/#" className="button submit">
                      Send Message
                    </a>
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Email</h3>
                  <a href="/#">dev@dinerocoin.org</a>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a href="/#" className="fa-twitter">
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-facebook">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-github">
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-instagram">
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-linkedin">
                        <span className="label">LinkedIn</span>
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
