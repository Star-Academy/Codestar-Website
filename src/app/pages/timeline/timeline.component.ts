import {Component, ElementRef, ViewChild, afterRender} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';

interface Item {
    title: string;
    day: string;
    month: string;
    description: string[];
}

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
    @ViewChild('section') private section!: ElementRef<HTMLElement>;

    public items: Item[] = [
        {
            title: 'آزمون ورودی دوره فرانت‌اند',
            day: '4',
            month: 'خرداد',
            description: [
                `
                این مسابقه از ساعت ۱۰ روز جمعه ۴ خرداد شروع می‌شود و به مدت ۵ ساعت ادامه خواهد داشت و در مجموع شامل ۵ سوال است که سطح آن‌ها از آسان به سخت متفاوت خواهد بود. برای حل سوالات باید به HTML ،CSS و JavaScript مسلط باشید به طوری که سوال اول و دوم مربوط به JavaScript است و حل ۳ سوال آخر به دانش HTML و CSS نیازمند است.
                `,
                `
                برای حل سوالات JavaScript نیازی به تسلط بر روی Frameworkهایی مانند React و Angular نیست و صرفا دانش JavaScript پایه کافی می‌باشد.
                `,
            ],
        },
        {
            title: 'آزمون ورودی دوره دوآپس',
            day: '4',
            month: 'خرداد',
            description: [
                `این مسابقه از ساعت ۱۰ روز جمعه ۴ خرداد شروع می‌شود و به مدت ۵ ساعت ادامه خواهد داشت و در مجموع شامل ۵ سوال است که سطح آن‌ها از آسان به سخت متفاوت خواهد بود.
                `,
                `
                برای حل سوالات باید به یک زبان برنامه نویسی از بین C#, Java, Python, JavaScript یا Go و ساخت API و ارسال و دریافت درخواست‌های REST با استفاده از آن مسلط بوده و با اسکریپت نویسی Bash و ابزار Docker آشنا باشید.
                `,
            ],
        },
        {
            title: 'آزمون ورودی دوره مهندسی نرم‌افزار',
            day: '4',
            month: 'خرداد',
            description: [
                `این مسابقه از ساعت ۱۶ روز جمعه ۴ خرداد شروع می‌شود و به مدت ۵ ساعت ادامه خواهد داشت و در مجموع شامل ۵ سوال است که سطح آن‌ها از آسان به سخت متفاوت خواهد بود به طوری که ۳ سوال اول الگوریتمی هستند و ۲ سوال آخر پیاده‌سازی می‌باشند. برای حل سوالات الگوریتمی می‌توانید از زبان‌های Python ،Java ،#C و یا ++C استفاده‌کنید؛ اما سوالات پیاده‌سازی را فقط می‌توانید با Java ،#C و یا ++C حل کنید.
                `,
                `سوالات به گونه‌ای تنظیم شده‌اند که با توجه به دانشی که دارید بتوانید بخشی از نمرۀ سوال را بگیرید. به عنوان مثال اگر نتوانید سوال ۳ را به طور کامل حل کنید، این امکان وجود دارد که بتوانید بخشی از سوال ۴ را حل کنید؛ بنابراین حتما به تمام سوالات مراجعه کنید.
                `,
            ],
        },
        {
            title: 'شروع مصاحبه',
            day: 'هفته دوم',
            month: 'خرداد',
            description: [
                `
                    بعد از اتمام آزمون‌های ورودی، برای هماهنگی تاریخ و ساعت مصاحبه با نفرات برتر تماس گرفته می‌شود.
                `,
                `
                    هر مصاحبه از دو قسمت مهارت‌های نرم و فنی تشکیل می‌شود.
                `,
            ],
        },
        {
            title: 'اعلام نتایج نهایی',
            day: 'اواخر',
            month: 'تیر',
            description: [
                `
                    بعد از اتمام مصاحبه، به تمام متقاضیانی که به مصاحبه دعوت شده بودند،
                    چه به عنوان کارآموز قبول شده باشند و چه نشده باشند،
                    پیام می‌دهیم و آن‌ها را از نتیجه باخبر می‌کنیم.
                `,
            ],
        },
        {
            title: 'مرحله اول کارآموزی',
            day: 'هفته اول',
            month: 'مرداد',
            description: [
                `
                    هدف از این مرحله، آشنایی منتورها و کارآموزها با یکدیگر است.
                    همچنین آموزش‌ها از همان روز اول در اختیار کارآموزان قرار می‌گیرد.
                `,
                `
                    برای گذراندن دوره، برنامه‌ای مدون از قبل تهیه شده است
                    و انتظار می‌رود کارآموزان همراه با آن پیش بروند.
                `,
                `
                    در هر مرحله فهرستی از کارهایی که کارآموزان باید انجام دهند به آن‌ها داده می‌شود
                    و در پایان آن مرحله، با کارآموزانی که نتوانند حداقل امتیاز را کسب کنند خداحافظی می‌کنیم.
                `,
                `
                    البته انتظار نداریم تمام کارآموزان بتوانند نمرۀ کاملی از هر مرحله کسب کنند،
                    بلکه انتظار داریم امتیاز آن‌ها از حدی بالاتر باشد که دستیابی به آن آسان است.
                `,
            ],
        },
        {
            title: 'مرحله دوم کارآموزی',
            day: 'هفته دوم',
            month: 'مرداد',
            description: [
                `
                    با اتمام مرحله اول، سطح علمی کارآموزها از حد مورد نظر بالاتر رفته است؛
                    بنابراین می‌توانیم آموزش‌های نیمه‌پیشرفته را شروع کنیم و آن‌ها را با چالش‌های بیشتری روبه‌رو کنیم.
                `,
                `
                    در مرحله اول، کارآموزان پروژه‌های کوچکی انجام می‌دهند تا مطالبی که یاد می‌گیرند را در عمل نیز ببینند؛
                    اما در این مرحله، سطح آموزش‌ها و همچنین سطح پروژه‌ها پیشرفته‌تر از مرحلۀ قبل است
                    و برای انجام آن‌ها نیاز به وقت و انرژی بیشتری دارند.
                `,
            ],
        },
        {
            title: 'مرحله سوم کارآموزی',
            day: 'هفته سوم',
            month: 'مرداد',
            description: [
                `
                    پس از اتمام مراحل آموزشی کارآموزی، به آخرین مرحله یعنی پروژۀ پایانی می‌رسیم.
                    در این مرحله کارآموزهای فرانت‌اند و مهندسی نرم‌افزار با هم ادغام می‌شوند
                    و گروه‌های بزرگ‌تری را تشکیل می‌دهند تا بتوانند یک پروژۀ صنعتی را پیاده‌سازی کنند.
                `,
                `
                    تمام برنامه‌ریزی‌ها و تقسیم‌بندی کارها به خودِ کارآموزها سپرده می‌شود
                    و انتظار می‌رود با توجه به مهارت‌های نرمی که تا کنون یاد گرفته‌اند بتوانند این چالش را با موفقیت پشت سر بگذارند.
                    البته در طی این مدت، منتورها حضور دارند و در صورت نیاز کارآموزها می‌توانند از کمک آن‌ها استفاده کنند.
                `,
            ],
        },
        {
            title: 'پایان کارآموزی',
            day: 'هفته دوم',
            month: 'شهریور',
            description: [
                `
                    در انتهای دوره، کارآموزها نتیجۀ زحمات خود را در جلسه‌ای با بقیه به اشتراک می‌گذارند.
                    در این جلسه تمام افراد دخیل در کارآموزی
                    اعم از مدیران، منتورها و کارآموزهای دوره‌های فرانت‌اند و مهندسی نرم‌افزار حضور خواهند داشت.
                `,
                `
                    همچنین پس از پایان کارآموزی، از افراد برتر دعوت می‌کنیم تا در ادامۀ راه همراه ما باشند.
                `,
            ],
        },
    ];

    public constructor(service: IntersectionObserverService) {
        afterRender(() => {
            const options: IntersectionObserverInit = {rootMargin: '-120px 0px'};
            service.initObserver(this.section.nativeElement, 'header, li', options);
        });
    }
}
