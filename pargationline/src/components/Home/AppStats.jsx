function AppStats({ stats }) {
  const { statsTitle, StatsNum, statsSubTitle } = stats;
  return (
    <>
      <div className="app-stats-banner__item">
        <span className="app-stats-banner__item__subtext">{statsTitle}</span>
        <br />
        <span className="app-stats-banner__item__text">{StatsNum}</span>
        <br />
        <span className="app-stats-banner__item__subtext">{statsSubTitle}</span>
      </div>
    </>
  );
}

export default AppStats;
