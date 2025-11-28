"use client"

import { useState, useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

// --- کامپوننت باکس نویسنده (اصلاح شده با لینک جدید) ---
function AuthorBox() {
  return (
    <div className="mt-16 pt-8 border-t border-gray-800">
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 hover:border-purple-500/30 transition duration-300 group">
        
        {/* عکس نویسنده (لینک اصلاح شد) */}
        <a href="/Authors/peyman" className="shrink-0 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <img 
            src="https://c327107.parspack.net/prompt/1763293380820-7da4d49b-0a7d-49ed-bd42-6c1f46d7424b.jpeg" 
            alt="پیمان کلانتر نظری" 
            className="relative w-20 h-20 rounded-full object-cover border-2 border-gray-900 shadow-xl"
          />
        </a>

        {/* متن معرفی (لینک‌ها اصلاح شد) */}
        <div className="text-center md:text-right flex-1">
          <h3 className="text-lg font-bold text-white mb-1">
            نویسنده: <a href="/Authors/peyman" className="hover:text-purple-400 transition">پیمان کلانتر نظری</a>
          </h3>
          <p className="text-sm text-gray-400 mb-3 leading-relaxed">
            متخصص دیجیتال مارکتینگ و اتوماسیون (n8n). با پیش‌زمینه مهندسی نرم‌افزار و مدیریت عملیات آموزشی، به شما کمک می‌کنم تا فرآیندهای کسب‌وکارتان را هوشمند کنید.
          </p>
          <a href="/Authors/peyman" className="inline-flex items-center text-xs font-semibold text-purple-400 hover:text-purple-300 transition gap-1 px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20 hover:bg-purple-500/20">
            مشاهده پروفایل و رزومه
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

// --- کامپوننت تب مقدمه ---
function IntroTab() {
  return (
    <section id="intro" className="tab-content prose max-w-4xl mx-auto leading-relaxed">
      <h2 className="text-2xl font-bold mb-4 text-white">پرامپت میدجرنی دقیقاً چیست؟</h2>
      <p className="text-gray-300">
        به ساده‌ترین زبان، پرامپت (Prompt) دستوری است که شما به هوش مصنوعی میدجرنی می‌دهید. این دستور متنی، به میدجرنی
        می‌گوید که چه تصویری را برای شما «تصور» کند. اما پرامپت فقط یک مشت کلمه نیست؛ بلکه فیلم‌نامه و دستورالعمل دقیق شما
        برای یک هنرمند نابغه است. هرچه دستور شما واضح‌تر، دقیق‌تر و خلاقانه‌تر باشد، خروجی نهایی هم به شاهکار نزدیک‌تر
        می‌شود.
      </p>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-red-950/30 border-r-4 border-red-500 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold text-white">پرامپت ضعیف:</h4>
          <code className="block bg-gray-900 p-2 rounded mt-2 text-left text-gray-300" dir="ltr">
            a cat
          </code>
          <p className="mt-2 text-sm text-gray-400">نتیجه: یک گربه معمولی و احتمالاً حوصله‌سربر.</p>
        </div>
        <div className="bg-green-950/30 border-r-4 border-green-500 p-4 rounded-lg shadow-sm">
          <h4 className="font-bold text-white">پرامپت قوی:</h4>
          <code className="block bg-gray-900 p-2 rounded mt-2 text-left text-sm text-gray-300" dir="ltr">
            A fluffy, adorable calico kitten sleeping peacefully on a stack of old books, warm sunlight, cinematic
            lighting, photorealistic, 8k
          </code>
          <p className="mt-2 text-sm text-gray-400">نتیجه: یک عکس هنری که می‌توانید قاب کنید و به دیوار بزنید!</p>
        </div>
      </div>
    </section>
  )
}

// --- کامپوننت تب آناتومی پرامپت ---
function AnatomyTab() {
  return (
    <section id="anatomy" className="tab-content">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">آناتومی یک پرامپت عالی: ۴ بخش کلیدی</h2>
        <p className="mt-2 text-gray-400">
          یک پرامپت حرفه‌ای از این چهار بخش تشکیل می‌شود. شناختن آن‌ها به شما قدرت مانور زیادی می‌دهد.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:bg-gray-800 transition">
          <h3 className="font-bold text-xl mb-2 text-white">۱. سوژه اصلی (Subject)</h3>
          <p className="text-gray-300">قلب پرامپت شما. به وضوح بگویید می‌خواهید عکس چه چیزی باشد.</p>
          <p className="mt-4 text-sm bg-gray-900 p-2 rounded font-mono text-left text-gray-300" dir="ltr">
            An old wizard
          </p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-md border-t-4 border-pink-500 hover:bg-gray-800 transition">
          <h3 className="font-bold text-xl mb-2 text-white">۲. توصیفات و جزئیات (Details)</h3>
          <p className="text-gray-300">به سوژه خود شخصیت بدهید. از صفت‌ها برای توصیف ظاهر، حس و محیط استفاده کنید.</p>
          <p className="mt-4 text-sm bg-gray-900 p-2 rounded font-mono text-left text-gray-300" dir="ltr">
            in a misty forest
          </p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-md border-t-4 border-cyan-500 hover:bg-gray-800 transition">
          <h3 className="font-bold text-xl mb-2 text-white">۳. سبک هنری (Style)</h3>
          <p className="text-gray-300">به میدجرنی بگویید تصویر را به چه سبکی خلق کند: نقاشی، عکاسی، انیمه و...</p>
          <p className="mt-4 text-sm bg-gray-900 p-2 rounded font-mono text-left text-gray-300" dir="ltr">
            digital painting
          </p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-md border-t-4 border-fuchsia-500 hover:bg-gray-800 transition">
          <h3 className="font-bold text-xl mb-2 text-white">۴. پارامترها (Parameters)</h3>
          <p className="text-gray-300">دستورات فنی مانند نسبت تصویر، نسخه مدل و... که همیشه در انتهای پرامپت می‌آیند.</p>
          <p className="mt-4 text-sm bg-gray-900 p-2 rounded font-mono text-left text-gray-300" dir="ltr">
            --ar 16:9 --v 6.0
          </p>
        </div>
      </div>
    </section>
  )
}

// --- کامپوننت تب پارامترها (شامل چارت) ---
function ParametersTab() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["--ar (نسبت تصویر)", "--no (پرامپت منفی)", "--s (هنری بودن)", "--v (نسخه)", "--c (آشفتگی)"],
            datasets: [
              {
                label: "میزان استفاده و اهمیت",
                data: [95, 85, 70, 90, 40],
                backgroundColor: [
                  "rgba(168, 85, 247, 0.6)",
                  "rgba(236, 72, 153, 0.6)",
                  "rgba(6, 182, 212, 0.6)",
                  "rgba(139, 92, 246, 0.6)",
                  "rgba(217, 70, 239, 0.6)",
                ],
                borderColor: [
                  "rgba(168, 85, 247, 1)",
                  "rgba(236, 72, 153, 1)",
                  "rgba(6, 182, 212, 1)",
                  "rgba(139, 92, 246, 1)",
                  "rgba(217, 70, 239, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "مقایسه اهمیت پارامترهای پرکاربرد",
                color: "#fff",
                font: {
                  size: 18,
                  family: "Vazirmatn",
                },
                padding: {
                  bottom: 20,
                },
              },
              tooltip: {
                bodyFont: {
                  family: "Vazirmatn",
                },
                titleFont: {
                  family: "Vazirmatn",
                },
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                ticks: {
                  color: "#9ca3af",
                  font: { family: "Vazirmatn" },
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
              },
              y: {
                ticks: {
                  color: "#9ca3af",
                  font: { family: "Vazirmatn", size: 14 },
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
        chartInstanceRef.current = null
      }
    }
  }, [])

  return (
    <section id="parameters" className="tab-content">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">پارامترهای جادویی میدجرنی</h2>
        <p className="mt-2 text-gray-400">
          این دستورات فنی را در انتهای پرامپت خود اضافه کنید تا کنترل بیشتری روی خروجی داشته باشید.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-3">
        <details className="bg-gray-800/50 p-4 rounded-lg shadow-sm cursor-pointer group border border-gray-700/50">
          <summary className="font-semibold text-lg flex justify-between items-center text-white">
            --ar (نسبت تصویر)
            <span className="text-purple-400 group-open:rotate-90 transform transition-transform duration-200">▶</span>
          </summary>
          <div className="mt-3 text-gray-300">
            <p>برای تغییر کادر و ابعاد عکس استفاده می‌شود.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <code className="font-mono text-sm text-purple-300">--ar 16:9</code> (برای والپیپر دسکتاپ)
              </li>
              <li>
                <code className="font-mono text-sm text-purple-300">--ar 9:16</code> (برای استوری اینستاگرام)
              </li>
              <li>
                <code className="font-mono text-sm text-purple-300">--ar 1:1</code> (مربع، حالت پیش‌فرض)
              </li>
            </ul>
          </div>
        </details>
        <details className="bg-gray-800/50 p-4 rounded-lg shadow-sm cursor-pointer group border border-gray-700/50">
          <summary className="font-semibold text-lg flex justify-between items-center text-white">
            --no (پرامپت منفی)
            <span className="text-purple-400 group-open:rotate-90 transform transition-transform duration-200">▶</span>
          </summary>
          <div className="mt-3 text-gray-300">
            <p>یکی از قوی‌ترین پارامترها! به میدجرنی می‌گوید چه چیزهایی را در تصویر قرار ندهد.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <code className="font-mono text-sm text-purple-300">--no text, words</code> (حذف متن و نوشته‌های
                ناخواسته)
              </li>
              <li>
                <code className="font-mono text-sm text-purple-300">--no blurry</code> (جلوگیری از تاری تصویر)
              </li>
            </ul>
          </div>
        </details>
        <details className="bg-gray-800/50 p-4 rounded-lg shadow-sm cursor-pointer group border border-gray-700/50">
          <summary className="font-semibold text-lg flex justify-between items-center text-white">
            --s (درجه هنری بودن)
            <span className="text-purple-400 group-open:rotate-90 transform transition-transform duration-200">▶</span>
          </summary>
          <div className="mt-3 text-gray-300">
            <p>
              میزان خلاقیت هنری میدجرنی را تعیین می‌کند (عددی بین ۰ تا ۱۰۰۰). مقادیر پایین‌تر به پرامپت وفادارترند و
              مقادیر بالاتر هنری‌تر.
            </p>
          </div>
        </details>
        <details className="bg-gray-800/50 p-4 rounded-lg shadow-sm cursor-pointer group border border-gray-700/50">
          <summary className="font-semibold text-lg flex justify-between items-center text-white">
            --v / --niji (نسخه مدل)
            <span className="text-purple-400 group-open:rotate-90 transform transition-transform duration-200">▶</span>
          </summary>
          <div className="mt-3 text-gray-300">
            <p>
              برای انتخاب نسخه مدل میدجرنی. همیشه پیشنهاد می‌شود از آخرین نسخه استفاده کنید. برای سبک انیمه از `niji`
              استفاده کنید.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <code className="font-mono text-sm text-purple-300">--v 6.0</code> (آخرین نسخه استاندارد)
              </li>
              <li>
                <code className="font-mono text-sm text-purple-300">--niji 6</code> (آخرین نسخه انیمه)
              </li>
            </ul>
          </div>
        </details>
      </div>
      <div className="mt-10">
        <h3 className="text-center text-2xl font-bold mb-4 text-white">اهمیت پارامترها در عمل</h3>
        <div className="chart-container h-[300px]">
          <canvas id="parametersChart" ref={chartRef}></canvas>
        </div>
      </div>
    </section>
  )
}

// --- کامپوننت تب پرامپت ساز ---
function BuilderTab() {
  const [subject, setSubject] = useState("")
  const [details, setDetails] = useState("")
  const [style, setStyle] = useState("")
  const [negative, setNegative] = useState("")
  const [stylize, setStylize] = useState("100")
  const [chaos, setChaos] = useState("0")
  const [version, setVersion] = useState("--v 6.0")
  const [selectedAr, setSelectedAr] = useState("")
  const [finalPrompt, setFinalPrompt] = useState("")
  const [copySuccess, setCopySuccess] = useState("")

  useEffect(() => {
    const promptParts = []
    if (subject) promptParts.push(subject)
    if (details) promptParts.push(details)
    if (style) promptParts.push(style)

    let prompt = promptParts.join(", ")

    if (selectedAr) prompt += ` --ar ${selectedAr}`
    if (negative)
      prompt += ` --no ${negative
        .split(",")
        .map((s) => s.trim())
        .join(" ")}`
    if (stylize !== "100") prompt += ` --s ${stylize}`
    if (chaos !== "0") prompt += ` --c ${chaos}`
    prompt += ` ${version}`

    setFinalPrompt(prompt.trim())
  }, [subject, details, style, negative, stylize, chaos, version, selectedAr])

  const handleCopyClick = () => {
    navigator.clipboard.writeText(finalPrompt).then(
      () => {
        setCopySuccess("کپی شد!")
        setTimeout(() => setCopySuccess(""), 2000)
      },
      () => {
        setCopySuccess("خطا در کپی")
      },
    )
  }

  return (
    <section id="builder" className="tab-content">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">پرامپت ساز تعاملی</h2>
        <p className="mt-2 text-gray-400">
          یادگیری خود را عملی کنید! با پر کردن فیلدهای زیر، پرامپت حرفه‌ای خود را بسازید.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="subject" className="font-semibold mb-2 block text-white">
              ۱. سوژه اصلی
            </label>
            <input
              type="text"
              id="subject"
              placeholder="مثال: A brave knight"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="details" className="font-semibold mb-2 block text-white">
              ۲. توصیفات و جزئیات
            </label>
            <textarea
              id="details"
              rows={4}
              placeholder="مثال: in shining armor, holding a glowing sword, on a misty mountain top"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="style" className="font-semibold mb-2 block text-white">
              ۳. سبک هنری
            </label>
            <input
              type="text"
              id="style"
              placeholder="مثال: concept art, fantasy, digital painting"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="negative" className="font-semibold mb-2 block text-white">
              پرامپت منفی (--no)
            </label>
            <input
              type="text"
              id="negative"
              placeholder="مثال: blurry, text, watermark"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
              value={negative}
              onChange={(e) => setNegative(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-6 bg-gray-800/50 p-6 rounded-lg shadow-sm border border-gray-700">
          <h3 className="font-bold text-xl border-b border-gray-700 pb-2 text-white">۴. پارامترها</h3>
          <div>
            <label className="font-semibold mb-3 block text-white">نسبت تصویر (--ar)</label>
            <div className="flex flex-wrap gap-2">
              {["1:1", "16:9", "9:16", "3:2"].map((ar) => (
                <button
                  key={ar}
                  onClick={() => setSelectedAr(ar)}
                  className={`px-4 py-2 rounded-lg font-semibold border-2 transition ${selectedAr === ar ? "bg-purple-600 text-white border-purple-500" : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"}`}
                >
                  {ar}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="stylize" className="font-semibold mb-2 block text-white">
              درجه هنری (--s <span id="stylizeValue">{stylize}</span>)
            </label>
            <input
              type="range"
              id="stylize"
              min="0"
              max="1000"
              value={stylize}
              step="50"
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              onChange={(e) => setStylize(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="chaos" className="font-semibold mb-2 block text-white">
              آشفتگی (--c <span id="chaosValue">{chaos}</span>)
            </label>
            <input
              type="range"
              id="chaos"
              min="0"
              max="100"
              value={chaos}
              step="10"
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              onChange={(e) => setChaos(e.target.value)}
            />
          </div>
          <div>
            <label className="font-semibold mb-3 block text-white">نسخه مدل</label>
            <select
              id="version"
              className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            >
              <option value="--v 6.0">Version 6.0</option>
              <option value="--v 5.2">Version 5.2</option>
              <option value="--niji 6">Niji 6 (Anime)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-5xl mx-auto border border-gray-800">
        <h4 className="font-bold mb-2 text-purple-400">پرامپت نهایی شما:</h4>
        <div className="relative">
          <textarea
            id="finalPrompt"
            rows={4}
            className="w-full bg-black p-3 rounded-md font-mono text-sm text-green-300 resize-none outline-none focus:ring-1 focus:ring-purple-500"
            readOnly
            value={finalPrompt}
            dir="ltr"
          ></textarea>
          <button
            id="copyBtn"
            className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-3 rounded-md text-sm transition"
            onClick={handleCopyClick}
          >
            {copySuccess || "کپی"}
          </button>
        </div>
      </div>
    </section>
  )
}

// --- کامپوننت تب ترفندهای پیشرفته ---
function AdvancedTab() {
  return (
    <section id="advanced" className="tab-content prose max-w-4xl mx-auto leading-relaxed">
      <h2 className="text-2xl font-bold mb-4 text-white">ترفندهای پیشرفته برای حرفه‌ای‌ها</h2>

      <h3 className="text-xl font-bold text-white mt-6">۱. وزن‌دهی به کلمات (Prompt Weighting)</h3>
      <p className="text-gray-300">
        گاهی می‌خواهید میدجرنی به یک کلمه در پرامپت شما بیشتر از بقیه توجه کند. برای این کار، از دو کالن (`::`) و یک عدد
        بعد از کلمه مورد نظر استفاده کنید تا اهمیت آن را مشخص کنید. عدد بالاتر به معنای اهمیت بیشتر است.
      </p>
      <code className="block bg-gray-900 p-2 rounded mt-2 text-left text-gray-300" dir="ltr">
        space::1 ship::2
      </code>
      <p className="text-gray-300">در این مثال، «ship» دو برابر «space» اهمیت دارد.</p>

      <h3 className="text-xl font-bold text-white mt-6">۲. استفاده از عکس به عنوان پرامپت (Image Prompt)</h3>
      <p className="text-gray-300">
        می‌توانید یک یا چند عکس را به میدجرنی بدهید تا از آن‌ها الهام بگیرد. ابتدا لینک مستقیم عکس را در ابتدای پرامپت خود
        قرار دهید و سپس پرامپت متنی را بنویسید.
      </p>
      <code className="block bg-gray-900 p-2 rounded mt-2 text-left text-sm text-gray-300" dir="ltr">
        [https://.../photo.jpg] a watercolor painting of the person
      </code>

      <h3 className="text-xl font-bold text-white mt-6">۳. استفاده از دستور `/describe`</h3>
      <p className="text-gray-300">
        اگر عکسی دارید ولی پرامپت آن را نمی‌دانید، این دستور به شما کمک می‌کند. با تایپ کردن `/describe` و آپلود عکس،
        میدجرنی ۴ پرامپت پیشنهادی بر اساس آن عکس به شما می‌دهد. این یک راه عالی برای یادگیری کلمات کلیدی و سبک‌های جدید
        است.
      </p>
    </section>
  )
}

// --- کامپوننت اصلی ---
export default function MidjourneyGuide() {
  const [activeTab, setActiveTab] = useState("intro")

  const renderTabContent = () => {
    switch (activeTab) {
      case "intro":
        return <IntroTab />
      case "anatomy":
        return <AnatomyTab />
      case "parameters":
        return <ParametersTab />
      case "builder":
        return <BuilderTab />
      case "advanced":
        return <AdvancedTab />
      default:
        return <IntroTab />
    }
  }

  const tabs = [
    { id: "intro", label: "مقدمه" },
    { id: "anatomy", label: "ساختار پرامپت" },
    { id: "parameters", label: "پارامترها" },
    { id: "builder", label: "✨ پرامپت ساز" },
    { id: "advanced", label: "ترفندهای پیشرفته" },
  ]

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-[family-name:var(--font-vazirmatn)]">
      <div className="container mx-auto p-4 md:p-8">
        
        {/* هدر صفحه */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            راهنمای جامع پرامپت نویسی میدجرنی
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            از مبتدی تا حرفه‌ای: یاد بگیرید چگونه با نوشتن پرامپت‌های قدرتمند، تصاویر شگفت‌انگیز خلق کنید.
          </p>
        </header>

        {/* نویگیشن تب‌ها */}
        <nav className="mb-8 flex justify-center border-b border-gray-800 overflow-x-auto">
          <div className="flex flex-nowrap md:flex-wrap -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn text-lg border-b-2 py-3 px-4 md:px-6 font-semibold transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-purple-500 text-purple-400 bg-purple-900/10"
                    : "border-transparent text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* محتوای اصلی */}
        <main id="main-content" className="min-h-[400px]">
          {renderTabContent()}
          
          {/* باکس نویسنده (اضافه شده در انتهای محتوا) */}
          <AuthorBox />
        </main>
      </div>
    </div>
  )
}
