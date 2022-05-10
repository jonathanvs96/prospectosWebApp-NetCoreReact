namespace ProspectosApi
{
    public class Prospecto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string Telefono { get; set; }
        public string RFC { get; set; }
        public string Documento { get; set; }
        public string Status { get; set; }
        public string Observacion { get; set; }
        public Domicilio Domicilio { get; set; }
    }
}