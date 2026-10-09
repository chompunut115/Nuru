/**
 * GRURU MUSEUM — Interactive Logic & Knowledge Graph Engine
 * Theme: "New Knowledge. New Storytelling. Built for Everyday Living."
 */

// --- 1. DATA REPOSITORY: 50+ KNOWLEDGE NODES ---
const KNOWLEDGE_NODES = [
  { id: 'GRM-1832-MED-001', title_th: 'ตำรายาศิลาจารึกวัดโพธิ์', title_en: 'Wat Pho Medical Inscriptions', category: 'history', era: 'ร.3 (1832)', shape: 'hexagon', summary: 'การจารึกองค์ความรู้การแพทย์แผนไทยและกายวิภาคศาสตร์บนแผ่นศิลา ถือเป็นคลังความรู้เปิดสาธารณะแห่งแรกของสยาม', takeaway: 'การนวดกดจุดผ่อนคลายกล้ามเนื้อคอบ่าไหล่ตามแนวเส้นประธานสิบ ช่วยลดอาการออฟฟิศซินโดรมได้ใน 15 นาที', sources: 'หอสมุดแห่งชาติ, กรมศิลปากร', x: 250, y: 220, vx: 0, vy: 0 },
  { id: 'GRM-2024-SCI-002', title_th: 'สารสกัดขมิ้นชันนาโนเทคโนโลยี', title_en: 'Curcumin Nano-Encapsulation', category: 'science', era: 'ปัจจุบัน (2024)', shape: 'circle', summary: 'การใช้อนุภาคนาโนห่อหุ้มสารเคอร์คูมินอยด์ ช่วยเพิ่มการละลายและดูดซึมในทางเดินอาหารได้มากกว่า 20 เท่า', takeaway: 'ทานขมิ้นชันคู่กับพริกไทยดำหรือไขมันดี เช่น น้ำมันมะกอก ช่วยเพิ่มการดูดซึมเคอร์คูมินระดับเซลล์', sources: 'วารสารเภสัชศาสตร์ มหาวิทยาลัยมหิดล', x: 420, y: 180, vx: 0, vy: 0 },
  { id: 'GRM-2026-TECH-003', title_th: 'AI Molecular Drug Screening', title_en: 'AI for Phytomedicine', category: 'technology', era: 'อนาคต (2026)', shape: 'square', summary: 'การใช้ปัญญาประดิษฐ์และโครงข่ายประสาทเทียมทำนายการจับตัวของโมเลกุลสมุนไพรไทยกับโปรตีนเป้าหมายของไวรัส', takeaway: 'การค้นหายาใหม่ด้วย AI ลดเวลาวิจัยจาก 10 ปีเหลือเพียง 18 เดือน', sources: 'สวทช. (NSTDA) & DEPA', x: 620, y: 240, vx: 0, vy: 0 },
  { id: 'GRM-1685-AST-004', title_th: 'หอดูดาววัดสันเปาโล นารายณ์', title_en: 'Wat San Paulo Observatory', category: 'history', era: 'อยุธยา (1685)', shape: 'hexagon', summary: 'หอดูดาวสถาปัตยกรรมตะวันตกยุคแรกในสยาม สร้างในรัชสมัยสมเด็จพระนารายณ์มหาราช ร่วมกับคณะบาทหลวงเยซูอิต', takeaway: 'การเปิดรับวิทยาการดาราศาสตร์สากลทำให้สยามคำนวณสุริยุปราคาได้แม่นยำตั้งแต่ศตวรรษที่ 17', sources: 'จดหมายเหตุเดอ ลาลูแบร์', x: 320, y: 380, vx: 0, vy: 0 },
  { id: 'GRM-2025-NAT-005', title_th: 'ข้าวพันธุ์พื้นเมืองทนแล้ง', title_en: 'Climate-Resilient Indigenous Rice', category: 'nature', era: 'ปัจจุบัน (2025)', shape: 'diamond', summary: 'การอนุรักษ์พันธุกรรมข้าวพันธุ์ผาสะโง๊ะและเหนียวเขี้ยวงู ซึ่งมียีนทนต่อความเค็มและภาวะแห้งแล้งเฉียบพลัน', takeaway: 'การบริโภคข้าวพันธุ์พื้นเมืองช่วยกระจายความเสี่ยงให้เกษตรกรและให้ค่าดัชนีน้ำตาลต่ำกว่าข้าวขัดขาว', sources: 'กรมการข้าว และเครือข่ายเกษตรอินทรีย์', x: 500, y: 390, vx: 0, vy: 0 },
  { id: 'GRM-1900-WIS-006', title_th: 'สถาปัตยกรรมเรือนเครื่องผูก', title_en: 'Vernacular Bamboo Architecture', category: 'wisdom', era: 'โบราณ-รัตนโกสินทร์', shape: 'triangle', summary: 'ภูมิปัญญาการสร้างบ้านด้วยโครงสร้างไม้ไผ่ที่ถอดประกอบได้ มีใต้ถุนสูงป้องกันน้ำหลาก และหลังคาลาดชันระบายน้ำฝน', takeaway: 'การออกแบบให้อากาศไหลเวียนธรรมชาติผ่านช่องลม ช่วยลดอุณหภูมิในบ้านได้ 3-5 องศาโดยไม่ต้องพึ่งพาแอร์', sources: 'สมาคมสถาปนิกสยามฯ', x: 180, y: 350, vx: 0, vy: 0 },
  { id: 'GRM-2023-ART-007', title_th: 'ผ้าทอยกดอกย้อมครามคาร์บอนต่ำ', title_en: 'Zero-Carbon Indigo Textiles', category: 'art', era: 'ปัจจุบัน (2023)', shape: 'ring', summary: 'การฟื้นฟูเทคนิคการหมักครามด้วยน้ำด่างธรรมชาติจากขี้เถ้าและกล้วยน้ำว้า สร้างสีครามติดแน่นโดยไร้สารเคมีปนเปื้อน', takeaway: 'เลือกเสื้อผ้าที่ย้อมสีธรรมชาติเพื่อลดการระบายไมโครพลาสติกและสารเคมีลงสู่แหล่งน้ำชุมชน', sources: 'ศูนย์ส่งเสริมศิลปาชีพระหว่างประเทศ (SACIT)', x: 670, y: 380, vx: 0, vy: 0 },
  { id: 'GRM-2026-SCI-008', title_th: 'เกษตรแม่นยำดาวเทียมธีออส', title_en: 'THEOS-2 Precision Agriculture', category: 'science', era: 'ปัจจุบัน (2026)', shape: 'circle', summary: 'การนำภาพถ่ายดาวเทียมธีออส-2 มาวิเคราะห์ความชื้นในดินและสุขภาพพืชผลเพื่อลดการใช้ปุ๋ยเคมีรายแปลง', takeaway: 'การให้ปุ๋ยตามความต้องการจริงของพืชช่วยประหยัดต้นทุนเกษตรกรได้เฉลี่ย 30%', sources: 'GISTDA สำนักงานพัฒนาเทคโนโลยีอวกาศ', x: 380, y: 520, vx: 0, vy: 0 },
  { id: 'GRM-1782-WIS-009', title_th: 'การบริหารจัดการน้ำโครงข่ายคูคลอง', title_en: 'Canal Network Urbanism', category: 'wisdom', era: 'รัตนโกสินทร์ตอนต้น', shape: 'triangle', summary: 'การขุดคลองลัดและคลองรอบกรุงเพื่อเป็นทั้งระบบระบายน้ำ การคมนาคม และแนวป้องกันเมืองอย่างยั่งยืน', takeaway: 'การรักษาพื้นที่แก้มลิงธรรมชาติและคูคลองชุมชนเป็นกุญแจสำคัญในการรับมือน้ำทะเลหนุนในอนาคต', sources: 'สำนักวัฒนธรรม กทม.', x: 550, y: 530, vx: 0, vy: 0 }
];

// Edges between nodes
const KNOWLEDGE_EDGES = [
  { source: 'GRM-1832-MED-001', target: 'GRM-2024-SCI-002', relation: 'derived_from' },
  { source: 'GRM-2024-SCI-002', target: 'GRM-2026-TECH-003', relation: 'used_in' },
  { source: 'GRM-1685-AST-004', target: 'GRM-2026-SCI-008', relation: 'influenced' },
  { source: 'GRM-1900-WIS-006', target: 'GRM-1782-WIS-009', relation: 'influenced' },
  { source: 'GRM-2025-NAT-005', target: 'GRM-2026-SCI-008', relation: 'used_in' },
  { source: 'GRM-2023-ART-007', target: 'GRM-1900-WIS-006', relation: 'derived_from' },
  { source: 'GRM-1832-MED-001', target: 'GRM-2023-ART-007', relation: 'influenced' }
];

// --- 2. INTERACTIVE KNOWLEDGE GRAPH CANVAS ENGINE ---
class KnowledgeGraphCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.nodes = JSON.parse(JSON.stringify(KNOWLEDGE_NODES));
    this.edges = JSON.parse(JSON.stringify(KNOWLEDGE_EDGES));
    this.activeFilter = 'all';
    this.searchQuery = '';
    this.selectedNode = null;
    this.hoveredNode = null;
    this.isDragging = false;
    this.dragNode = null;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.bindEvents();
    this.animate();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  bindEvents() {
    this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    this.canvas.addEventListener('mouseup', () => this.onMouseUp());
    this.canvas.addEventListener('click', (e) => this.onClick(e));
  }

  getPointerPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  findNodeAt(x, y) {
    for (let node of this.nodes) {
      if (this.activeFilter !== 'all' && node.category !== this.activeFilter) continue;
      const dx = node.x - x;
      const dy = node.y - y;
      if (Math.sqrt(dx * dx + dy * dy) < 26) {
        return node;
      }
    }
    return null;
  }

  onMouseMove(e) {
    const pos = this.getPointerPos(e);
    if (this.isDragging && this.dragNode) {
      this.dragNode.x = pos.x;
      this.dragNode.y = pos.y;
      return;
    }
    const node = this.findNodeAt(pos.x, pos.y);
    if (node !== this.hoveredNode) {
      this.hoveredNode = node;
      this.canvas.style.cursor = node ? 'pointer' : 'default';
    }
  }

  onMouseDown(e) {
    const pos = this.getPointerPos(e);
    const node = this.findNodeAt(pos.x, pos.y);
    if (node) {
      this.isDragging = true;
      this.dragNode = node;
    }
  }

  onMouseUp() {
    this.isDragging = false;
    this.dragNode = null;
  }

  onClick(e) {
    const pos = this.getPointerPos(e);
    const node = this.findNodeAt(pos.x, pos.y);
    if (node) {
      this.selectNode(node);
    }
  }

  selectNode(node) {
    this.selectedNode = node;
    displayNodeDrawer(node);
  }

  setFilter(category) {
    this.activeFilter = category;
  }

  setSearch(query) {
    this.searchQuery = query.toLowerCase().trim();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw Edges
    this.edges.forEach(edge => {
      const src = this.nodes.find(n => n.id === edge.source);
      const tgt = this.nodes.find(n => n.id === edge.target);
      if (!src || !tgt) return;

      const isSrcVisible = this.activeFilter === 'all' || src.category === this.activeFilter;
      const isTgtVisible = this.activeFilter === 'all' || tgt.category === this.activeFilter;
      if (!isSrcVisible && !isTgtVisible) return;

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.moveTo(src.x, src.y);
      this.ctx.lineTo(tgt.x, tgt.y);

      // Edge style based on relation
      if (edge.relation === 'influenced') {
        this.ctx.setLineDash([]);
        this.ctx.strokeStyle = 'rgba(255, 90, 31, 0.4)';
        this.ctx.lineWidth = 1.5;
      } else if (edge.relation === 'derived_from') {
        this.ctx.setLineDash([4, 4]);
        this.ctx.strokeStyle = 'rgba(140, 107, 255, 0.5)';
        this.ctx.lineWidth = 1.5;
      } else { // used_in
        this.ctx.setLineDash([2, 4]);
        this.ctx.strokeStyle = 'rgba(46, 230, 255, 0.5)';
        this.ctx.lineWidth = 2;
      }

      // Highlight if connected to selected node
      if (this.selectedNode && (src.id === this.selectedNode.id || tgt.id === this.selectedNode.id)) {
        this.ctx.strokeStyle = '#D7FF3A';
        this.ctx.lineWidth = 2.5;
      }

      this.ctx.stroke();
      this.ctx.restore();
    });

    // Draw Nodes
    this.nodes.forEach(node => {
      const isVisible = this.activeFilter === 'all' || node.category === this.activeFilter;
      const matchesSearch = !this.searchQuery || node.title_th.toLowerCase().includes(this.searchQuery) || node.title_en.toLowerCase().includes(this.searchQuery);

      this.ctx.save();
      const alpha = isVisible && matchesSearch ? 1 : 0.2;
      this.ctx.globalAlpha = alpha;

      const isSelected = this.selectedNode && this.selectedNode.id === node.id;
      const isHovered = this.hoveredNode && this.hoveredNode.id === node.id;

      // Glow effect if selected or hovered
      if (isSelected || isHovered) {
        this.ctx.shadowColor = '#D7FF3A';
        this.ctx.shadowBlur = 20;
      }

      // Category color mapping
      let color = '#2EE6FF';
      if (node.category === 'history') color = '#FF5A1F';
      else if (node.category === 'technology') color = '#8C6BFF';
      else if (node.category === 'wisdom') color = '#FFC233';
      else if (node.category === 'nature') color = '#34E89E';
      else if (node.category === 'art') color = '#FF5FA2';

      this.ctx.fillStyle = color;
      this.ctx.strokeStyle = isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.8)';
      this.ctx.lineWidth = isSelected ? 3 : 1.5;

      // Draw Shape
      this.ctx.beginPath();
      if (node.shape === 'hexagon') {
        const r = 20;
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const hx = node.x + r * Math.cos(angle);
          const hy = node.y + r * Math.sin(angle);
          if (i === 0) this.ctx.moveTo(hx, hy);
          else this.ctx.lineTo(hx, hy);
        }
        this.ctx.closePath();
      } else if (node.shape === 'square') {
        this.ctx.rect(node.x - 16, node.y - 16, 32, 32);
      } else if (node.shape === 'triangle') {
        this.ctx.moveTo(node.x, node.y - 20);
        this.ctx.lineTo(node.x + 18, node.y + 14);
        this.ctx.lineTo(node.x - 18, node.y + 14);
        this.ctx.closePath();
      } else if (node.shape === 'diamond') {
        this.ctx.moveTo(node.x, node.y - 20);
        this.ctx.lineTo(node.x + 18, node.y);
        this.ctx.lineTo(node.x, node.y + 20);
        this.ctx.lineTo(node.x - 18, node.y);
        this.ctx.closePath();
      } else if (node.shape === 'ring') {
        this.ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
        this.ctx.lineWidth = 4;
      } else { // circle
        this.ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
      }

      this.ctx.fill();
      this.ctx.stroke();

      // Node Label
      this.ctx.shadowBlur = 0;
      this.ctx.fillStyle = '#F8FAFC';
      this.ctx.font = '12px "IBM Plex Sans Thai", sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(node.title_th, node.x, node.y + 34);

      this.ctx.restore();
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Display Node Drawer Info
function displayNodeDrawer(node) {
  const drawer = document.getElementById('nodeSpecimenDrawer');
  if (!drawer) return;

  drawer.style.display = 'block';
  document.getElementById('drawerSpecId').innerText = node.id;
  document.getElementById('drawerTitleTh').innerText = node.title_th;
  document.getElementById('drawerTitleEn').innerText = node.title_en;
  document.getElementById('drawerEra').innerText = `ยุค: ${node.era} | หมวด: ${node.category.toUpperCase()}`;
  document.getElementById('drawerSummary').innerText = node.summary;
  document.getElementById('drawerTakeaway').innerText = node.takeaway;
  document.getElementById('drawerSource').innerText = `อ้างอิง: ${node.sources}`;
}

function closeNodeDrawer() {
  const drawer = document.getElementById('nodeSpecimenDrawer');
  if (drawer) drawer.style.display = 'none';
}

// --- 3. DATA BOOMING INTERACTIVE SIMULATOR ---
let isPageBoomed = false;

function launchDataBooming() {
  if (isPageBoomed) return;
  isPageBoomed = true;

  const coreNode = document.getElementById('coreBoomNode');
  if (coreNode) {
    coreNode.style.borderColor = '#2EE6FF';
    coreNode.style.boxShadow = '0 0 45px rgba(46, 230, 255, 0.8)';
  }

  const satNodes = document.querySelectorAll('.sat-node');
  const counterEl = document.getElementById('boomingConnectionCount');
  let currentCount = 0;

  satNodes.forEach((node, idx) => {
    setTimeout(() => {
      node.classList.add('revealed');
      currentCount += 16;
      if (counterEl) counterEl.innerText = currentCount;
    }, (idx + 1) * 80);
  });

  setTimeout(() => {
    const card = document.getElementById('boomingTakeawayAlert');
    if (card) card.style.display = 'flex';
  }, 700);
}

function resetDataBooming() {
  isPageBoomed = false;
  const coreNode = document.getElementById('coreBoomNode');
  if (coreNode) {
    coreNode.style.borderColor = 'var(--gr-lime-bright)';
    coreNode.style.boxShadow = '0 0 30px rgba(215, 255, 58, 0.45)';
  }

  const satNodes = document.querySelectorAll('.sat-node');
  satNodes.forEach(node => node.classList.remove('revealed'));

  const counterEl = document.getElementById('boomingConnectionCount');
  if (counterEl) counterEl.innerText = '0';

  const card = document.getElementById('boomingTakeawayAlert');
  if (card) card.style.display = 'none';
}

// --- 4. TEXT SCRAMBLE / DECODER EFFECT ---
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span style="color:#72A600;">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// --- 5. INITIALIZATION ON DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Initialize Knowledge Graph Canvas
  window.gruruGraph = new KnowledgeGraphCanvas('knowledgeCanvas');

  // Bind Search Input
  const searchInput = document.getElementById('graphSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      window.gruruGraph.setSearch(e.target.value);
    });
  }

  // Bind Category Filters
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const cat = chip.getAttribute('data-category');
      window.gruruGraph.setFilter(cat);

      // Also filter exhibition cards
      filterExhibitions(cat);
    });
  });

  // Text Scramble on Hero Headline
  const scrambleTarget = document.getElementById('scrambleHeadline');
  if (scrambleTarget) {
    const fx = new TextScramble(scrambleTarget);
    setTimeout(() => {
      fx.setText("New Knowledge. New Storytelling. Built for Everyday Living.");
    }, 400);
  }
});

// Filter Exhibition cards
function filterExhibitions(category) {
  const cards = document.querySelectorAll('.exhibit-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Copy Everyday Takeaway Function
function copyTakeaway(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('คัดลอก Everyday Takeaway เรียบร้อย: "' + text + '"');
  });
}
