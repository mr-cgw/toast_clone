import { Doughnut } from 'react-chartjs-2';
import * as Colors from '../../Colors';
export default function PieChar({ applications }) {
  const appArr = Object.values(applications);
  const offer = appArr.filter((app) => app.Offer).length;
  const onSite = appArr.filter((app) => app.onSite).length;
  const techInterview = appArr.filter((app) => app.techInterview).length;
  const phoneScreen = appArr.filter((app) => app.phoneScreen).length;
  const total = appArr.filter(
    (app) => !app.Offer && !app.onSite && !app.techInterview && !app.phoneScreen
  ).length;
  const data = [total, phoneScreen, techInterview, onSite, offer];
  return appArr.length ? (
    <div className="donut">
      <Doughnut
        data={{
          labels: ['rest', 'phonescreen', 'tech interview', 'onsite', 'offer'],
          datasets: [
            {
              data: data,
              label: '# of applications',
              backgroundColor: [
                `${Colors.c1}`,
                `${Colors.c2}`,
                `${Colors.c7}`,
                `${Colors.c10}`,
                `${Colors.c11}`,
              ],
            },
          ],
        }}
      />
    </div>
  ) : null;
}
