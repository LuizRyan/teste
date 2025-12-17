const SUPABASE_URL = "https://ffprsdeicjjttfedzbif.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmcHJzZGVpY2pqdHRmZWR6YmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NTg4NTksImV4cCI6MjA4MTEzNDg1OX0.U5J1L6vv7RZztxUjJ4UKcNhtHzwOlaU0NTeXoyAa0GU";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const TEMAS = {
    VTC: "VTC",
    CTC: "CTC",
    LICENCA_PREMIUM: "LICENÇA PREMIO",
    CONTAGEM_TEMPO: "CONTAGEM DE TEMPO (QUIN/QUÊNIO)",
};

const ESCOLAS_SEOM = [
    "Unidade Regional De Ensino - Suzano",
    "ALFREDO ROBERTO",
    "ALICE ROMANOS PROFª",
    "ANDERSON DA SILVA SOARES",
    "ANGELA SUELI P DIAS",
    "ANIS FADUL DOUTOR",
    "ANTONIO BRASILIO MENEZES DA FONSECA",
    "ANTONIO MASCHIO",
    "AUGUSTO LIEMPEL",
    "BATISTA RENZI",
    "BENEDITO FERREIRA DA SILVA",
    "BRASILIO MACHADO NETO",
    "CARLOS MOLTENI",
    "CELESTE MARIA DE ALMEIDA AMARAL PROFESSORA",
    "CELIA PEREIRA DE LIMA PROFª",
    "COMENDADOR MEGUID",
    "DANIELA PAIVA DA SILVA",
    "DAVID JORGE CURI",
    "DJALMA DOS SANTOS PAINEO",
    "EDA MIEKO T D'OLIVEIRA",
    "EDIR DO PRADO FERRAZ PROFª",
    "ELIANA CAMARGO LISBOA",
    "ELISA IZABEL DOS SANTOS",
    "ENEUCE S P MARQUES",
    "EUCLIDES DE OLIVEIRA",
    "EULALIA DE MATTOS OLIVEIRA",
    "FERNANDO A P DE ALBUQUERQUE",
    "GERALDO JUSTINO DE O FILHO",
    "GILBERTO M S SEIXAS",
    "GIOVANNI MILANO",
    "HELIO LOURENCO",
    "HENRIQUE GONCALVES MARCHESINI",
    "IIDA MASAMI",
    "ISAAC GRINBERG",
    "IVONE DA SILVA ALMEIDA",
    "JACQUES YVES COUSTEAU",
    "JOAO BATISTA DE OLIVEIRA",
    "JOHANA KESSLER",
    "JORGE AMADO",
    "JOSE BENEDITO LEITE",
    "JOSE CELESTINO SANCHES",
    "JOSHUA BARROSO DIAS",
    "JOVITA A S DO AMARAL",
    "JUDITH DE O GARCEZ",
    "JUSTINIANO COSTA",
    "KAORU IRAMINA",
    "KASUATO ARASHIRO",
    "KAZUO OTA",
    "KIYOSHI TATEYAMA",
    "LEDA FERNANDES LOPES",
    "LIUBA PIZANI",
    "LUIZ BIANCONI",
    "LUIZ ROMANATO",
    "MANOEL VICENTE FERREIRA",
    "MARCIA RICARDINA DE PAIVA",
    "MARIO MANOEL D'OLIVEIRA",
    "MARTHA C M DE PAULA",
    "MERCEDES IZAURA T NORONHA",
    "MIGUEL O BADRA",
    "MODESTO CARVALHOSA",
    "NEYDE PIERUCCINI",
    "ODARIO FERREIRA DA SILVA",
    "OLGA CAMPOS FREIRE",
    "OSCALIA G. O. B. T. SILVA",
    "OSWALDO DE O LIMA",
    "PAULO ERNESTO E KLIEMANN",
    "PEDRO R M DE MACEDO",
    "PROF. PAULO KOBAYASHI",
    "RAFAEL F S RANGEL",
    "RAUL BRASIL",
    "ROBERTO BIANCONI",
    "RODRIGUES ALVES",
    "SEBASTIAO PEREIRA VIDAL",
    "SOLANGE DE JESUS MARTINS",
    "TAIITIRO KOSAKA",
    "TOKUZU TERAZAKI",
    "VERONICA S TANNURI",
    "WALDEMAR DA COSTA FILHO",
    "YOLANDA BASSI",
    "ZENAIDE JORGE CURI",
    "ZEZITO",
];

const FIELDS_CONFIG = {
    VTC: [
        { name: "nome", label: "Nome", type: "text", required: true },
        { name: "escola", label: "Escola", type: "select", options: ESCOLAS_SEOM, required: true },
        { name: "cpf", label: "CPF", type: "text" },
        { name: "status", label: "Status", type: "select", options: ["Em andamento", "Concluído", "Indeferido"] },
        { name: "protocolo", label: "Protocolo", type: "text" },
        { name: "created_at", label: "Data Entrada", type: "date" },
        { name: "saida", label: "Data Saída", type: "date" },
        { name: "observacoes", label: "Observações", type: "textarea", full: true },
    ],
    CTC: [
        { name: "nome", label: "Nome", type: "text", required: true },
        { name: "escola", label: "Escola", type: "select", options: ESCOLAS_SEOM, required: true },
        { name: "cpf", label: "CPF", type: "text" },
        { name: "status", label: "Status", type: "select", options: ["Em andamento", "Concluído", "Indeferido"] },
        { name: "processo", label: "Processo", type: "text" },
        { name: "created_at", label: "Data Entrada", type: "date" },
        { name: "saida", label: "Data Saída", type: "date" },
        { name: "observacoes", label: "Observações", type: "textarea", full: true },
    ],
    LICENCA_PREMIUM: [
        { name: "nome", label: "Nome", type: "text", required: true },
        { name: "escola", label: "Escola", type: "select", options: ESCOLAS_SEOM, required: true },
        { name: "cpf", label: "CPF", type: "text" },
        { name: "quinquenio", label: "Quinquênio", type: "text" },
        { name: "status", label: "Status", type: "select", options: ["Em andamento", "Concluído", "Indeferido"] },
        { name: "created_at", label: "Data Entrada", type: "date" },
        { name: "saida", label: "Data Saída", type: "date" },
        { name: "observacoes", label: "Observações", type: "textarea", full: true },
    ],
    CONTAGEM_TEMPO: [
        { name: "nome", label: "Nome", type: "text", required: true },
        { name: "escola", label: "Escola", type: "select", options: ESCOLAS_SEOM, required: true },
        { name: "cpf", label: "CPF", type: "text" },
        { name: "finalidade", label: "Finalidade", type: "text" },
        { name: "status", label: "Status", type: "select", options: ["Em andamento", "Concluído", "Indeferido"] },
        { name: "created_at", label: "Data Entrada", type: "date" },
        { name: "saida", label: "Data Saída", type: "date" },
        { name: "observacoes", label: "Observações", type: "textarea", full: true },
    ],
};

let temaAtual = "VTC";
let editingId = null;
let allRegistros = [];

document.addEventListener("DOMContentLoaded", () => {
    initTemaAtivo();
    popularSelectFiltro();
    loadAndRender();

    const form = document.getElementById("formRegistro");
    form.addEventListener("submit", handleFormSubmit);

    const btnCancelar = document.getElementById("btnCancelar");
    btnCancelar.addEventListener("click", resetForm);

    document.querySelectorAll('[data-tema]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('[data-tema]').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            temaAtual = e.currentTarget.getAttribute('data-tema');
            
            document.getElementById("pageTitle").innerText = TEMAS[temaAtual] || temaAtual;
            
            resetForm();
            loadAndRender();
        });
    });

    const btnNovo = document.getElementById("btnNovoScroll");
    if (btnNovo) {
        btnNovo.addEventListener("click", () => {
            resetForm();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => {
                const first = document.querySelector("input, select");
                if (first) first.focus();
            }, 500);
        });
    }

    const btnSeape = document.getElementById("btnIrSeape");
    if(btnSeape) btnSeape.addEventListener("click", () => window.location.href = "seape.html");

    const btnIndex = document.getElementById("btnIrIndex");
    if(btnIndex) btnIndex.addEventListener("click", () => window.location.href = "index.html");
});

function initTemaAtivo() {
    const btns = document.querySelectorAll('[data-tema]');
    if (btns.length > 0) {
        btns.forEach(b => b.classList.remove('active'));
        btns[0].classList.add('active');
        temaAtual = btns[0].getAttribute('data-tema');
        document.getElementById("pageTitle").innerText = TEMAS[temaAtual];
    }
}

async function loadAndRender() {
    renderFormFields();
    await loadRecords();
}

function renderFormFields() {
    const container = document.getElementById("formContainer");
    container.innerHTML = "";

    const fields = FIELDS_CONFIG[temaAtual] || [];
    
    fields.forEach(f => {
        let html = "";
        if (f.type === "textarea") {
            html = fieldTextarea(f.name, f.label, f.required, f.full);
        } else if (f.type === "select") {
            html = fieldSelect(f.name, f.label, f.options, f.required, f.full);
        } else {
            html = fieldInput(f.name, f.label, f.type, f.required, f.full);
        }
        container.insertAdjacentHTML("beforeend", html);
    });
}

function fieldInput(name, label, type, required, full) {
    const cssClass = full ? "input-group full-width" : "input-group";
    return `
    <div class="${cssClass}">
      <label for="${name}">${label}</label>
      <input type="${type || 'text'}" id="${name}" name="${name}" ${required ? "required" : ""}>
    </div>
  `;
}

function fieldTextarea(name, label, required, full) {
    const cssClass = full ? "input-group full-width" : "input-group";
    return `
    <div class="${cssClass}">
      <label for="${name}">${label}</label>
      <textarea id="${name}" name="${name}" ${required ? "required" : ""} rows="4"></textarea>
    </div>
  `;
}

function fieldSelect(name, label, options, required, full) {
    const cssClass = full ? "input-group full-width" : "input-group";
    const opts = (options || []).map(o => `<option value="${escapeAttr(o)}">${escapeHtml(o)}</option>`).join("");
    return `
    <div class="${cssClass}">
      <label for="${name}">${label}</label>
      <select id="${name}" name="${name}" ${required ? "required" : ""}>
        <option value="">Selecione...</option>
        ${opts}
      </select>
    </div>
  `;
}

async function loadRecords() {
    try {
        const { data, error } = await supabaseClient
            .from("sefrep_registros")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(1000);

        if (error) throw error;
        allRegistros = data || [];
        aplicarFiltro();
    } catch (err) {
        showMsg(`Erro: ${err.message}`, "error");
    }
}

function aplicarFiltro() {
    const filtro = document.getElementById("filtroTema");
    const temaSelecionado = filtro ? filtro.value : "";
    let lista = [];

    if (temaSelecionado === "") {
        lista = allRegistros;
    } else {
        lista = allRegistros.filter(r => r.tema === temaSelecionado || r.tema_key === temaSelecionado);
    }
    renderTable(lista);
}

function popularSelectFiltro() {
    const select = document.getElementById("filtroTema");
    if (!select) return;
    select.innerHTML = '<option value="">Todos os Registros</option>';
    Object.keys(TEMAS).forEach(key => {
        const option = document.createElement("option");
        option.value = key;
        option.innerText = TEMAS[key];
        select.appendChild(option);
    });
    select.addEventListener("change", aplicarFiltro);
}

function renderTable(lista) {
    const tbody = document.getElementById("tbodyRegistros");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (!lista || !lista.length) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:20px; color:#94a3b8;">Nenhum registro encontrado.</td></tr>`;
        return;
    }

    lista.forEach((r) => {
        const tr = document.createElement("tr");
        
        const dataFmt = fmtDate(r.data_registro);
        const temaFmt = TEMAS[r.tema] || r.tema;
        const entradaFmt = fmtDateTime(r.created_at);
        const saidaFmt = r.saida ? fmtDate(r.saida) : "—";
        const proto = r.protocolo || r.processo || "—";

        let badgeClass = "status-warn";
        if (r.status === "Concluído" || r.status === "Deferido") badgeClass = "status-ok";
        if (r.status === "Indeferido") badgeClass = "status-bad";

        tr.innerHTML = `
            <td>${dataFmt}</td>
            <td>${temaFmt}</td>
            <td style="font-weight:500;">${r.nome}</td>
            <td>${r.escola}</td>
            <td><span class="status-badge ${badgeClass}">${r.status}</span></td>
            <td>${proto}</td>
            <td>${entradaFmt}</td>
            <td>${saidaFmt}</td>
            <td>
                <button class="btn btn-secondary" style="padding:4px 8px; font-size:12px;" onclick="startEditById(${r.id})">Editar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function startEditById(id) {
    const r = allRegistros.find(x => x.id === id);
    if (!r) return;

    if (r.tema && r.tema !== temaAtual) {
        temaAtual = r.tema;
        const btn = document.querySelector(`[data-tema="${temaAtual}"]`);
        if (btn) btn.click();
        setTimeout(() => preencherForm(r), 300);
    } else {
        preencherForm(r);
    }
}

function preencherForm(r) {
    editingId = r.id;
    
    document.getElementById("pageTitle").innerText = "Editando Registro #" + r.id;
    
    const fields = document.querySelectorAll("#formContainer input, #formContainer select, #formContainer textarea");
    fields.forEach(f => {
        if (r[f.name] !== undefined) f.value = r[f.name];
    });

    if (r.data_registro) {
       const dtInput = document.getElementById("created_at"); 
       if(dtInput) dtInput.value = r.data_registro; 
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {};
    formData.forEach((val, key) => obj[key] = val);

    obj.tema = temaAtual;
    
    const hoje = new Date().toISOString().split("T")[0];
    if (!obj.data_registro) obj.data_registro = hoje;

    try {
        let error = null;
        if (editingId) {
            const res = await supabaseClient.from("sefrep_registros").update(obj).eq("id", editingId);
            error = res.error;
        } else {
            const res = await supabaseClient.from("sefrep_registros").insert([obj]);
            error = res.error;
        }

        if (error) throw error;
        
        showMsg("Salvo com sucesso!", "success");
        resetForm();
        loadRecords();
        
    } catch (err) {
        showMsg(err.message, "error");
    }
}

function resetForm() {
    editingId = null;
    document.getElementById("formRegistro").reset();
    document.getElementById("pageTitle").innerText = TEMAS[temaAtual];
    showMsg("", "");
}

function showMsg(txt, type) {
    const el = document.getElementById("msg");
    el.innerText = txt;
    el.style.color = type === "error" ? "#ef4444" : "#10b981";
}

function escapeHtml(str) {
    if (!str) return "";
    return String(str).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[m]);
}

function escapeAttr(str) {
    if (!str) return "";
    return String(str).replace(/"/g, "&quot;");
}

function fmtDate(s) {
    if (!s) return "";
    if(s.includes("T")) s = s.split("T")[0];
    const p = s.split("-");
    return `${p[2]}/${p[1]}/${p[0]}`;
}

function fmtDateTime(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    return d.toLocaleDateString('pt-BR');
}
