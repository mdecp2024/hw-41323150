var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-41323150 \n 個人網站: https://github.com/41323150 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '錄影測試 \n a = "我會寫python程式了"\nfor i in range(1,10):\n    print(i,a) \n 完成品 \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一 \n \n \n \n 題目二 \n \n \n 題目三 \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '作業一 \n \n 解: \n 程式 \n import math\n\n# 定義圓形列印函數\ndef print_circle():\n    # 圓形的參數\n    size = 10  # 字元區域大小 (10x10)\n    radius = size // 2  # 圓的半徑\n    center = radius - 0.5  # 圓心位置\n\n    # 調整比例因子，讓圓形更接近正圓\n    aspect_ratio = 2  # 調整行與列的比例\n\n    # 繪製圓形\n    for y in range(size):\n        for x in range(size * aspect_ratio):\n            # 計算該點是否在圓內\n            distance = math.sqrt(((x / aspect_ratio) - center) ** 2 + (y - center) ** 2)\n            if distance <= radius:\n                print("*", end="")  # 圓內用 "*" 表示\n            else:\n                print(" ", end="")  # 圓外用空格表示\n        print()  # 換行\n\n# 呼叫函數列印圓形\nprint_circle() \n \n 作業二 \n \n 解 : \n 程式 \n from browser import html\nfrom browser import document as doc\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 40\n\n# gs*tc = canvas width and height\nctx = canvas.getContext("2d")\n\ndef dRect(lux, luy, w, h, s=1, c="lightgrey"):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c  # 修正大小寫\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\ndef grid(width, height, grid_pix):\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x * gs, y * gs, gs, gs)\n\ndef draw_circle(grid_size, radius):\n    center = grid_size // 2\n    for y in range(grid_size):\n        for x in range(grid_size):\n            # 使用格子中心進行距離計算\n            distance = (((x + 0.5) - center) ** 2 + ((y + 0.5) - center) ** 2) ** 0.5\n            if distance <= radius:\n                fill(x, y, "black")\n\n# 繪製 10x10 的格子\ngrid(10, 10, gs)\n\n# 使用黑色方格圍出一個圓，半徑為 4 格\ndraw_circle(10, 4)\n \n \n 成品: \n \n \n 1.\xa0 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 網頁上的方格與塗色 \n 3. 完成上列題目後, 請利用 Youtube 影片 簡報 個人的解題過程與心得. \n \n 心得: \n 1.嘗試寫了之後才發現我在迴圈這部分還不熟，還需要再努力。 \n 2.我有點太依賴Chat GPT大神了，還需要另外花時間去學習與理解。 \n \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12', 'text': '題目 \n \n 解: \n 程式碼 \n n = 5  #總共的行數\nspase = "_"\n\'\'\'\nfor i in range(n):  #對於每一行\n    #印出空格\n    print(space * (n - i - 1), end=\'\')\n\'\'\'\n"""\nfor i in range(n):  #對於每一行\n    #印出空格\n    print(space * (n - i - 1), end=\'\')\n"""\nfor i in range(n):  #對於每一行\n    #印出空格\n    #print(space * (n - i - 1), end=\'\')\n    print("目前的數字 " + str(i)) \n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w12_hw', 'text': '1. 請各組組員分別利用\xa0 Brython 以及 Jupyter lab \xa0環境, 執行 可攜程式 \xa0notebook 目錄中的\xa0 01_string_input_print.ipynb 至\xa010_for_search.ipynb \xa0筆記本程式, 完成後請將能在 Brython 執行的程式碼存入個人\xa0 Gist \xa0後, 將各程式執行連結放入 w12_hw 網頁上. 最後請說明各範例中所使用的程式語法以及執行心得. \n \n 練習1 \n 說明: 運用的程式語法為print，執行後會顯示你輸入在print後的字串 \n 練習2 \n 說明: 用到的語法是input及print，執行後，他會出現提示框，讓你輸入自己想要的字串，再將字串放到預設好的對話當中 \n 練習3 \n 說明:一樣是input和print，還有用到if，else的語法，若做出設計者預設的答案，就會做出不同的回應。 \n 練習4 \n 說明:用到input、print、if、else、in的語法，利用了購物車的概念，將需要購買的東西用in語法增加在list中，也可以刪除不要的東西。 \n 練習5 \n 說明:新增了.index、.pop、.insert語法.index是用來搜尋，如果沒有會跳出error，pop則是移除列表中的索引，若()中是空白，則會刪除最後一個索引。 \n 練習6 \n 說明:主要在教學列表的使用方式，【】內第一個是起點，第二個數字是終點，第三個數字是每多少輸出一次。 \n 練習7-1 \n 練習7-2 \n 練習7-3 \n 說明: 增加了del的語法， 是一個用於刪除物件、變數、列表元素、字典項目等關鍵字，類似加入購物車後，不想要購買就按下刪除觸發del的這個語法。 \n 練習8-1 \n 練習8-2 \n 練習8-3 \n 說明:使用了for...in range的語法，從列表中選出要的字串來表示。 \n 練習9-1 \n 練習9-2 \n 練習9-3 \n 說明:用到了for...loop，else的語法，操作列表list進行迴圈處理，使用if...else來檢查條件成立，來判斷是不是我們想要的東西。 \n 練習10 \n 說明:用for迴圈查看list列表並根據是否條件成立並進行輸出。 \n \n 心得 \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '解 \n \n \n 程式碼 \n from browser import html\nfrom browser import document as doc\nimport math\n\ncanvas = html.CANVAS(width=500, height=500)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 4\n\n# 混色的\nctx.globalCompositeOperation = "screem"\n\n# 黑邊圓*2 (每個畫四個邊邊)\nctx.strokeStyle = \'black\'\n\n# 第一個圓\nctx.beginPath()\nctx.arc(160, 160, 141, 0.25 * math.pi, 0.75 * math.pi)\nctx.fillStyle = "Coral"  \nctx.fill()\nctx.stroke()\n\nctx.beginPath()\nctx.arc(160, 160, 141, 0.75 * math.pi, 1.25 * math.pi)\nctx.fillStyle = "MediumPurple"  \nctx.fill()\nctx.stroke()\n\nctx.beginPath()\nctx.arc(160, 160, 141, 1.25 * math.pi, 1.75 * math.pi)\nctx.fillStyle = "LimeGreen"  \nctx.fill()\nctx.stroke()\n\nctx.beginPath()\nctx.arc(160, 160, 141, 1.75 * math.pi, 0.25 * math.pi)\nctx.fillStyle = "Beige"  \nctx.fill()\nctx.stroke()\n\n# 第二個圓\nctx.beginPath()\nctx.arc(260, 260, 141, 1.25 * math.pi, 1.75 * math.pi)\nctx.fillStyle = "SkyBlue"\nctx.fill()\nctx.stroke()\n\nctx.beginPath()\nctx.arc(260, 260, 141, 1.75 * math.pi, 0.25 * math.pi)\nctx.fillStyle = "Crimson"  \nctx.fill()\nctx.stroke()\n\nctx.beginPath()\nctx.arc(260, 260, 141, 0.25 * math.pi, 0.75 * math.pi)\nctx.fillStyle = "LightCyan"\nctx.fill()\nctx.stroke()\n\nctx.beginPath()\nctx.arc(260, 260, 141, 0.75 * math.pi, 1.25 * math.pi)\nctx.fillStyle = "Gold"\nctx.fill()\nctx.stroke()\n\n# 紅方形*2 (4個三角形)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.moveTo(60, 60)\nctx.lineTo(60, 260)\nctx.lineTo(260, 260)\nctx.fillStyle = "ForestGreen"\nctx.fill()\nctx.stroke()\n\nctx.beginPath()\nctx.moveTo(60, 60)\nctx.lineTo(260, 60)\nctx.lineTo(260, 260)\nctx.fillStyle = "DarkSlateBlue"  \nctx.fill()\nctx.stroke()\n\nctx.beginPath()\nctx.moveTo(160, 160)\nctx.lineTo(360, 160)\nctx.lineTo(360, 360)\nctx.fillStyle = "LightYellow" \nctx.fill()\nctx.stroke()\n\nctx.beginPath()\nctx.moveTo(160, 160)\nctx.lineTo(160, 360)\nctx.lineTo(360, 360)\nctx.fillStyle = "PaleGreen"  \nctx.fill()\nctx.stroke()\n\n# 重疊的小方型\nctx.beginPath()\nctx.moveTo(160, 160)\nctx.lineTo(160, 260)\nctx.lineTo(260, 260)\nctx.fillStyle = "SteelBlue"  \nctx.fill()\nctx.stroke()\n\nctx.beginPath()\nctx.moveTo(160, 160)\nctx.lineTo(260, 160)\nctx.lineTo(260, 260)\nctx.fillStyle = "DarkOrchid"\nctx.fill()\nctx.stroke()\n\n# 藍斜線\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(60, 60)\nctx.lineTo(360,360)\nctx.stroke() \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_ex', 'text': '3圓相切 \n 程式碼 \n from browser import html\nfrom browser import document as doc\nimport random\nimport math\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]  # 獲取指定 id 的 div 元素\n    brython_div <= canvas  # 將 canvas 插入到該 div 中\n    ctx = canvas.getContext("2d")\n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    r = random.randint(0, 255)\n    g = random.randint(0, 255)\n    b = random.randint(0, 255)\n    return f"rgb({r}, {g}, {b})"\n\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 繪製三個圓並處理交集\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    canvas, ctx = initialize_canvas(400, 400)\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n\n    color_dict = {}\n\n    for py in range(0, canvas.height):\n        for px in range(0, canvas.width):\n            # 判斷該點是否在各圓內\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n\n            # 確定交集情況\n            if in_circle1 and in_circle2 and in_circle3:\n                if "intersection_all" not in color_dict:\n                    color_dict["intersection_all"] = random_color_generator()\n                current_color = color_dict["intersection_all"]\n            elif in_circle1 and in_circle2:\n                if "intersection_1_2" not in color_dict:\n                    color_dict["intersection_1_2"] = random_color_generator()\n                current_color = color_dict["intersection_1_2"]\n            elif in_circle1 and in_circle3:\n                if "intersection_1_3" not in color_dict:\n                    color_dict["intersection_1_3"] = random_color_generator()\n                current_color = color_dict["intersection_1_3"]\n            elif in_circle2 and in_circle3:\n                if "intersection_2_3" not in color_dict:\n                    color_dict["intersection_2_3"] = random_color_generator()\n                current_color = color_dict["intersection_2_3"]\n            elif in_circle1:\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                current_color = "white"  # 背景色\n\n            ctx.fillStyle = current_color\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n\n# 設定三個圓的圓心和半徑\nx1, y1, r1 = 150, 200, 100  # 圓1\nx2, y2, r2 = 250, 200, 100  # 圓2\nx3, y3, r3 = 200, 300, 100  # 圓3\n\n# 呼叫函式繪製三個圓\ndraw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3) \n \n 解 \n and \n 多圓相切 \n \n 程式碼 \n from browser import html\nfrom browser import document as doc\nimport random\nimport math\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    """\n    初始化畫布，創建一個指定大小的 Canvas 元素，並將其加到 HTML 文件中。\n    返回畫布元素和它的 2D 繪圖上下文。\n    """\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]\n    brython_div <= canvas\n    ctx = canvas.getContext("2d")\n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    r = random.randint(0, 255)\n    g = random.randint(0, 255)\n    b = random.randint(0, 255)\n    return f"rgb({r}, {g}, {b})"\n\n# 判斷點是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 檢查所有圓是否有重疊\ndef ensure_no_isolated_circles(circles):\n    overlap = [False] * len(circles)\n    for i in range(len(circles)):\n        for j in range(i + 1, len(circles)):\n            cx1, cy1, r1 = circles[i]\n            cx2, cy2, r2 = circles[j]\n            distance = math.sqrt((cx1 - cx2) ** 2 + (cy1 - cy2) ** 2)\n            if distance <= r1 + r2:  # 判斷是否有重疊\n                overlap[i] = True\n                overlap[j] = True\n    return all(overlap)\n\n# 使用者設定的多個圓，並進行掃描線填充\ndef draw_circles():\n    canvas, ctx = initialize_canvas(400, 400)\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n\n    color_dict = {}\n\n    # 隨機生成 5 到 10 個圓，確保沒有圓是孤立的\n    while True:\n        num_circles = random.randint(5, 10)\n        circles = [\n            (random.randint(50, 350), random.randint(50, 350), random.randint(50, 100))\n            for _ in range(num_circles)\n        ]\n        if ensure_no_isolated_circles(circles):\n            break\n\n    for py in range(0, canvas.height):\n        for px in range(0, canvas.width):\n            overlapping_indices = []\n\n            for i, (cx, cy, r) in enumerate(circles):\n                if is_point_in_circle(px, py, cx, cy, r):\n                    overlapping_indices.append(i)\n\n            if overlapping_indices:\n                overlap_key = "_".join(map(str, sorted(overlapping_indices)))\n                if overlap_key not in color_dict:\n                    color_dict[overlap_key] = random_color_generator()\n                current_color = color_dict[overlap_key]\n            else:\n                current_color = "white"\n\n            ctx.fillStyle = current_color\n            ctx.fillRect(px, py, 1, 1)\n\ndraw_circles() \n \n 解 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w15', 'text': '題目1: \n 從 1 累加到 100 \n \n # 定義函數來計算和顯示結果\ndef calculate_sum():\n    total = 0\n    for i in range(1, 101):  # 從 1 遍歷到 100\n        total += i\n    print(f"總和是: {total}")  # 在控制台顯示結果\n\n# 呼叫函數執行\ncalculate_sum() \n \n \n 題目2: \n addto \n \n def addto(start, end):\n    """\n    計算從 start 到 end 的整數總和。\n    \n    參數:\n    - start: 起始值 (整數)\n    - end: 結束值 (整數)\n    \n    回傳:\n    - 總和 (整數)\n    """\n    total = sum(range(start, end + 1))  # 使用內建的 sum 函數\n    return total\n\n# 呼叫函式並印出結果\nresult = addto(1, 100)\nprint(f"累加的結果是: {result}") \n \n \n 題目3: \n add_only_even \n \n def add_only_even(start, end):\n    """\n    計算從 start 到 end 之間所有偶數的總和。\n    \n    參數:\n    - start: 起始值 (整數)\n    - end: 結束值 (整數)\n    \n    回傳:\n    - 偶數總和 (整數)\n    """\n    # 使用範圍產生偶數並計算總和\n    total = sum(i for i in range(start, end + 1) if i % 2 == 0)\n    return total\n\n# 呼叫函式並印出結果\nresult = add_only_even(1, 100)\nprint(f"累加的偶數結果是: {result}") \n \n 題目4: \n add_avoid_8 \n \n def add_avoid_8(start, end):\n    """計算從 start 到 end 的累加結果，避開包含 \'8\' 的數字以及基數（奇數）"""\n    valid_numbers = [x for x in range(start, end + 1) if \'8\' not in str(x) and x % 2 == 0]\n    print("符合條件的數字:", valid_numbers)  # 打印符合條件的數字，看看哪些數字被選中\n    return sum(valid_numbers)\n\n# 測試函式\nresult = add_avoid_8(1, 100)\nprint(f"從 1 到 100 的累加總和（避開包含 \'8\' 的數字以及基數）是：{result}") \n \n 補充: \n 去除3跟8 \n def calculate_sum():\n    total = 0\n    valid_numbers = []  # 用來存儲符合條件的數字\n    for i in range(1, 101):  # 從 1 遍歷到 100\n        # 檢查數字中是否包含 \'8\' 或 \'3\'\n        if \'8\' not in str(i) and \'3\' not in str(i):\n            total += i  # 累加符合條件的數字\n            valid_numbers.append(i)  # 把符合條件的數字加到列表中\n    print(f"符合條件的數字是: {valid_numbers}")  # 顯示符合條件的數字\n    print(f"總和是: {total}")  # 顯示最終總和\n\n# 呼叫函數執行\ncalculate_sum() \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': '\n 請以自己的學號最後四碼作為繪圖的座標原點, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖座標原點), 並以 pixel=2 的黑色直線分別利用 Brython 繪圖, 標示出向右為正的 X 軸, 以及向下為正的 Y 軸, 並且利用文字標示出原點座標 (例如: (39, 32)), 之後請自選最左側圖形的起始點座標, 直接在頁面畫出下列圖像, 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像 ( 圖片來源 ). \n 解 \n \n \n 程式碼 \n from browser import document, html\nimport math\n\n# 初始化畫布\ndef initialize_canvas(canvas_width=1000, canvas_height=400):\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    document["brython_div1"] <= canvas  # 加入到 HTML 容器中\n    ctx = canvas.getContext("2d")  # 獲取 2D 繪圖上下文\n    return canvas, ctx\n\n# 設定學號後四碼原點 (31, 50)\norigin_x, origin_y = 3.1 * 10, 5 * 10  # 原始座標\n\n# 初始化畫布\ncanvas, ctx = initialize_canvas(1000, 400)\n\n# 繪製 X 軸和 Y 軸，只畫向右和向下的部分，並標註\ndef draw_axes():\n    ctx.beginPath()\n    \n    # 繪製 X 軸向右延伸\n    ctx.moveTo(origin_x, origin_y)  # 原點\n    ctx.lineTo(canvas.width, origin_y)  # 向右延伸\n    ctx.lineTo(canvas.width - 10, origin_y - 5)  # X 軸箭頭\n    ctx.lineTo(canvas.width - 10, origin_y + 5)  # X 軸箭頭\n    ctx.strokeStyle = "black"\n    ctx.lineWidth = 2\n    ctx.stroke()\n\n    # 繪製 Y 軸向下延伸\n    ctx.beginPath()\n    ctx.moveTo(origin_x, origin_y)  # 原點\n    ctx.lineTo(origin_x, canvas.height)  # 向下延伸\n    ctx.lineTo(origin_x - 5, canvas.height - 10)  # Y 軸箭頭\n    ctx.lineTo(origin_x + 5, canvas.height - 10)  # Y 軸箭頭\n    ctx.stroke()\n\n    # 標註原點及方向\n    ctx.fillStyle = "black"\n    ctx.font = "12px Arial"\n    ctx.fillText(f"({31}, {50})", origin_x + 5, origin_y - 5)\n    ctx.fillText("正X", canvas.width - 40, origin_y - 10)  # X 軸正方向\n    ctx.fillText("正Y", origin_x + 10, canvas.height - 10)  # Y 軸正方向\n\n# 繪製六邊形\ndef draw_hexagon(x, y, size, color):\n    ctx.beginPath()\n    for i in range(6):\n        angle = (i * 60) * (math.pi / 180)\n        px = x + size * math.cos(angle)\n        py = y + size * math.sin(angle)\n        if i == 0:\n            ctx.moveTo(px, py)\n        else:\n            ctx.lineTo(px, py)\n    ctx.closePath()\n    ctx.fillStyle = color\n    ctx.fill()\n\n# 繪製菱形\ndef draw_diamond(x, y, width, height, color):\n    ctx.beginPath()\n    ctx.moveTo(x, y - height / 2)\n    ctx.lineTo(x + width / 2, y)\n    ctx.lineTo(x, y + height / 2)\n    ctx.lineTo(x - width / 2, y)\n    ctx.closePath()\n    ctx.fillStyle = color\n    ctx.fill()\n\n# 繪製三角形\ndef draw_triangle(x, y, size, color):\n    ctx.beginPath()\n    ctx.moveTo(x, y - size)  # 頂點\n    ctx.lineTo(x - size, y + size)  # 左下角\n    ctx.lineTo(x + size, y + size)  # 右下角\n    ctx.closePath()\n    ctx.fillStyle = color\n    ctx.fill()\n\n# 繪製圓形\ndef draw_circle(x, y, radius, color):\n    ctx.beginPath()\n    ctx.arc(x, y, radius, 0, 2 * math.pi)\n    ctx.fillStyle = color\n    ctx.fill()\n\n# 繪製矩形\ndef draw_rectangle(x, y, width, height, color):\n    ctx.beginPath()\n    ctx.rect(x, y, width, height)\n    ctx.fillStyle = color\n    ctx.fill()\n\n# 繪製長條形\ndef draw_bar(x, y, width, height, color):\n    draw_rectangle(x, y, width, height, color)\n\n# 繪製圖形\ndef draw_shapes():\n    # 繪製圖形時調整 y 坐標，使其在原點下方\n    draw_hexagon(origin_x + 50, origin_y + 100, 40, "orange")  # 六邊形\n    draw_diamond(origin_x + 150, origin_y + 100, 50, 80, "teal")  # 菱形\n    draw_triangle(origin_x + 250, origin_y + 100, 40, "cyan")  # 三角形\n    draw_circle(origin_x + 350, origin_y + 100, 40, "pink")  # 圓形\n    draw_rectangle(origin_x + 450, origin_y + 70, 60, 60, "yellow")  # 矩形\n    draw_bar(origin_x + 550, origin_y + 85, 100, 30, "blue")  # 長條形\n\n# 執行繪圖\ndraw_axes()\ndraw_shapes() \n \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'w16_exam2', 'text': '\n 題目: 請以自己的學號最後四碼作為下列繪圖的左上方點座標, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖左上方點座標), 並以紅色文字標示出該點座標 (例如: (39, 32)), 之後請利用 pixel=2 的藍色直線, 自訂迷宮畫布大小, 直接在頁面畫出下列圖像, 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像). \n \n 解 \n \n 程式碼 \n \n from browser import html\nfrom browser import document as doc\n\n# 建立畫布\ncanvas = html.CANVAS(width=600, height=600)  # 畫布大小增加兩倍\nbrython_div = doc["brython_div1"]  # 將畫布放置於網頁中的指定 div\nbrython_div <= canvas\n\n# 取得 canvas 的 2D 繪圖上下文\nctx = canvas.getContext("2d")\n\n# 每一格的像素大小\npixel_scale = 100  # 每格的像素比例增加兩倍 (原為20，放大到40)\n\n# 定義原點 (31, 50) 作為起始點偏移\noffset_x = 31 * 2  # 放大兩倍\noffset_y = 50 * 2  # 放大兩倍\n\n# 定義迷宮線條\nlines = [\n    ((0, 0), (1, 0)),\n    ((2, 0), (5, 0)),\n    ((5, 0), (5, 5)),\n    ((0, 5), (4, 5)),\n    ((4, 5), (4, 3)),\n    ((2, 3), (4, 3)),\n    ((1, 1), (1, 4)),\n    ((3, 3), (3, 2)),\n    # 第二條線\n    ((0, 0), (0, 5)),\n    ((0, 5), (4, 5)),\n    ((4, 4), (2, 4)),\n    ((2, 2), (2, 1)),\n    ((1, 1), (4, 1)),\n    ((4, 0), (4, 2)),\n]\n\n# 繪製迷宮線條\nctx.strokeStyle = "blue"  # 設定線條顏色\nctx.lineWidth = 2  # 設定線條寬度\n\nfor line in lines:\n    start = line[0]\n    end = line[1]\n    ctx.beginPath()\n    ctx.moveTo(\n        offset_x + start[0] * pixel_scale,\n        offset_y + start[1] * pixel_scale\n    )\n    ctx.lineTo(\n        offset_x + end[0] * pixel_scale,\n        offset_y + end[1] * pixel_scale\n    )\n    ctx.stroke()\n\n# 將座標標示移動到紅點附近的適當位置\nctx.font = "18px Arial"  # 放大字體大小 (原為14px)\nctx.fillStyle = "red"\nctx.fillText("(31, 50)", offset_x + 10, offset_y - 15)  # 在紅點的右上方標出座標 \n \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'w16_exam3', 'text': '題目: 請以自己的學號最後四碼作為下列繪圖的左上方點座標, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖左上方點座標), 並以紅色文字標示出該點座標 (例如: (39, 32)), 之後請利用 pixel=2 的黑色直線, 自訂迷宮畫布大小, 直接在頁面畫出下列圖像, 並且利用紅色連續線段標示從上方入口, 走至下方出口的路線圖. 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像). \n \n 解 \n \n 程式碼 \n \n from browser import html\nfrom browser import document as doc\n\n# 建立畫布\ncanvas = html.CANVAS(width=600, height=600)  # 畫布大小增加兩倍\nbrython_div = doc["brython_div1"]  # 將畫布放置於網頁中的指定 div\nbrython_div <= canvas\n\n# 取得 canvas 的 2D 繪圖上下文\nctx = canvas.getContext("2d")\n\n# 每一格的像素大小\npixel_scale = 100  # 每格的像素比例增加兩倍 (原為20，放大到40)\n\n# 定義原點 (31, 50) 作為起始點偏移\noffset_x = 31 * 2  # 放大兩倍\noffset_y = 50 * 2  # 放大兩倍\n\n# 定義迷宮線條 (外框)\nlines = [\n    ((0, 0), (1, 0)),\n    ((2, 0), (5, 0)),\n    ((5, 0), (5, 5)),\n    ((0, 5), (4, 5)),\n    ((4, 5), (4, 3)),\n    ((2, 3), (4, 3)),\n    ((1, 1), (1, 4)),\n    ((3, 3), (3, 2)),\n    # 第二條線\n    ((0, 0), (0, 5)),\n    ((0, 5), (4, 5)),\n    ((4, 4), (2, 4)),\n    ((2, 2), (2, 1)),\n    ((1, 1), (4, 1)),\n    ((4, 0), (4, 2)),\n]\n\n# 繪製迷宮線條 (外框)\nctx.strokeStyle = "black"  # 設定外框顏色為黑色\nctx.lineWidth = 2  # 設定線條寬度\n\nfor line in lines:\n    start = line[0]\n    end = line[1]\n    ctx.beginPath()\n    ctx.moveTo(\n        offset_x + start[0] * pixel_scale,\n        offset_y + start[1] * pixel_scale\n    )\n    ctx.lineTo(\n        offset_x + end[0] * pixel_scale,\n        offset_y + end[1] * pixel_scale\n    )\n    ctx.stroke()\n\n# 定義過關路線\nsolution_path = [\n    ((1.5, 0), (1.5, 0.5)),\n    ((0.5, 0.5), (1.5, 0.5)),\n    ((0.5, 0.5), (0.5, 4.5)),\n    ((0.5, 4.5), (1.5, 4.5)),\n    ((1.5, 4.5), (1.5, 2.5)),\n    ((1.5, 2.5), (2.5, 2.5)),\n    ((2.5, 2.5), (2.5, 1.5)),\n    ((2.5, 1.5), (3.5, 1.5)),\n    ((3.5, 1.5), (3.5, 2.5)),\n    ((3.5, 2.5), (4.5, 2.5)),\n    ((4.5, 2.5), (4.5, 5)),\n]\n\n# 繪製過關路線\nctx.strokeStyle = "red"  # 設定過關路線顏色為紅色\nctx.lineWidth = 3  # 過關路線稍粗一些，便於區分\n\nfor line in solution_path:\n    start = line[0]\n    end = line[1]\n    ctx.beginPath()\n    ctx.moveTo(\n        offset_x + start[0] * pixel_scale,\n        offset_y + start[1] * pixel_scale\n    )\n    ctx.lineTo(\n        offset_x + end[0] * pixel_scale,\n        offset_y + end[1] * pixel_scale\n    )\n    ctx.stroke()\n\n# 將座標標示移動到紅點附近的適當位置\nctx.font = "18px Arial"  # 放大字體大小 (原為14px)\nctx.fillStyle = "blue"  # 設定座標文字顏色為藍色\nctx.fillText("(31, 50)", offset_x + 10, offset_y - 15)  # 在紅點的右上方標出座標 \n \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};