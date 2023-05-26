import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Plan, PlanProps } from "pricing-table-react";
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={`row ${styles.buttons}`}>
          <Link 
            className="button button--secondary button--lg"
            to="https://notionforms.io/forms/docubro-xmtjms">
            Join The Cloud Beta
          </Link>
        </div>
      </div>
    </header>
  );
}

const plans: PlanProps[] = [
  {
    href: "https://notionforms.io/forms/docubro-xmtjms",
    price: "20",
    title: "Team Plan",
    advantages: [
      {
        text: "Shared cluster",
      },
      {
        text: "Forum support",
      },
    ],
    duration: "month",
    guarantee: "7 days trial + 14 money back guarantee",
    titleDescription: "Individual and small teams",
  },
  {
    href: "https://notionforms.io/forms/docubro-xmtjms",
    price: "70",
    title: "Enterprise Plan",
    advantages: [
      {
        text: "Dedicated cluster",
      },
      {
        text: "Faster response",
      },
      {
        text: "Developer support",
      },
    ],
    duration: "month",
    guarantee: "7 days trial + 14 money back guarantee",
    titleDescription: "Enterprise and high volume projects",
  },
];

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ChatGPT for your documentation">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <>
        <Plan Plans={plans} Currency={'€'} BackColor={'#a5346f'}/>;
        </>
      </main>
    </Layout>
  );
}
